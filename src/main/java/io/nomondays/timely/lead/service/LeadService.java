package io.nomondays.timely.lead.service;

import io.nomondays.timely.lead.dto.LeadRequest;
import io.nomondays.timely.lead.domain.Lead;
import io.nomondays.timely.user.domain.User;
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
