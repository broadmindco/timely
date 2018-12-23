package com.runway.timely.lead.controller;

import com.runway.timely.auth.exception.LoginFailedException;
import com.runway.timely.auth.service.AuthenticationService;
import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.dto.LeadRequest;
import com.runway.timely.lead.dto.LeadResponse;
import com.runway.timely.lead.exception.LeadNotFountException;
import com.runway.timely.lead.service.LeadService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/leads")
public class LeadController {

    private final LeadService leadService;
    private final AuthenticationService authService;

    public LeadController(LeadService leadService, AuthenticationService authService) {
        this.leadService = leadService;
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<LeadResponse> createLead(
        @Valid @RequestBody LeadRequest request
    ) {

        final var sender = this.authService
            .getCurrentUser()
            .orElseThrow(LoginFailedException::new);

        final var lead = new Lead();
        lead.setAddress(request.getAddress());
        lead.setSocial(request.getSocial());
        lead.setContacts(request.getContacts());
        lead.setName(request.getName());
        lead.setStatus(request.getStatus());

        final var response = this.leadService.save(lead, sender)
            .map(LeadResponse::new)
            .orElseThrow(IllegalStateException::new);

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity<Stream<LeadResponse>> getAllLeads() {

        final var sender = this.authService
            .getCurrentUser()
            .orElseThrow(LoginFailedException::new);


        final var response = this.leadService.findAll(sender)
            .map(LeadResponse::new);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<LeadResponse> findOneLead(
        @PathVariable String id
    ) {

        final var sender = this.authService
            .getCurrentUser()
            .orElseThrow(LoginFailedException::new);

        final var response = this.leadService
            .findById(id, sender)
            .map(LeadResponse::new)
            .orElseThrow(LeadNotFountException::new);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeadResponse> updateLead(
        @PathVariable String id,
        @Valid @RequestBody LeadRequest request
    ) {

        final var sender = this.authService
            .getCurrentUser()
            .orElseThrow(LoginFailedException::new);

        final var lead = this.leadService
            .findById(id, sender)
            .orElseThrow(LeadNotFountException::new);

        lead.setStatus(request.getStatus());

        final var response = this.leadService
            .save(lead, sender)
            .map(LeadResponse::new)
            .orElseThrow();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }



}
