package com.runway.timely.lead.service;

import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.dto.LeadRequest;
import com.runway.timely.user.domain.User;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.Optional;
import java.util.stream.Stream;

public interface LeadService {

    @PreAuthorize("#sender.isAdmin()")
    Optional<Lead> save(Lead lead, User sender);

    @PreAuthorize("#sender.isAdmin()")
    Stream<Lead> findAll(User sender);

    Optional<Lead> findById(String id, User sender);

    @PreAuthorize("#sender.isAdmin()")
    void update(Lead lead, LeadRequest request, User sender);

}
