package com.runway.timely.lead.service;

import com.runway.timely.lead.converter.LeadConverter;
import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.dto.LeadRequest;
import com.runway.timely.lead.repository.LeadRepository;
import com.runway.timely.user.domain.User;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Stream;

@Service
class DefaultLeadService implements LeadService {

    private final LeadRepository leadRepository;
    private final LeadConverter leadConverter;

    DefaultLeadService(
        LeadRepository leadRepository,
        LeadConverter leadConverter
    ) {
        this.leadRepository = leadRepository;
        this.leadConverter = leadConverter;
    }

    @Override
    @PreAuthorize("#sender.isAdmin()")
    public Optional<Lead> save(Lead lead, User sender) {
        return Optional.of(this.leadRepository.save(lead));
    }

    @Override
    @PreAuthorize("#sender.isAdmin()")
    public Stream<Lead> findAll(User sender) {
        return this.leadRepository
            .findAll()
            .stream();
    }

    @Override
    @PreAuthorize("#sender.isAdmin()")
    public Optional<Lead> findById(String id, User sender) {
        return this.leadRepository.findById(id);
    }

    @Override
    public void update(Lead lead, LeadRequest request, User sender) {
        this.leadConverter.update(lead, request);
    }

}
