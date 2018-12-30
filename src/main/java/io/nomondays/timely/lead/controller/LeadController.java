package io.nomondays.timely.lead.controller;

import io.nomondays.timely.auth.exception.LoginFailedException;
import io.nomondays.timely.auth.service.AuthenticationService;
import io.nomondays.timely.lead.converter.LeadConverter;
import io.nomondays.timely.lead.dto.LeadRequest;
import io.nomondays.timely.lead.dto.LeadResponse;
import io.nomondays.timely.lead.exception.LeadNotFountException;
import io.nomondays.timely.lead.service.LeadService;
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
    private final LeadConverter leadConverter;

    public LeadController(
        LeadService leadService,
        AuthenticationService authService,
        LeadConverter leadConverter
    ) {
        this.leadService = leadService;
        this.leadConverter = leadConverter;
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<LeadResponse> createLead(
        @Valid @RequestBody LeadRequest request
    ) {

        final var sender = this.authService
            .getCurrentUser()
            .orElseThrow(LoginFailedException::new);

        final var lead = this.leadConverter.toLead(request);

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

        this.leadService.update(lead, request, sender);

        final var response = this.leadService
            .save(lead, sender)
            .map(LeadResponse::new)
            .orElseThrow();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }



}
