package io.nomondays.timely.lead.service;

import io.nomondays.timely.lead.converter.LeadConverter;
import io.nomondays.timely.lead.dto.LeadRequest;
import io.nomondays.timely.lead.domain.Lead;
import io.nomondays.timely.lead.repository.LeadRepository;
import io.nomondays.timely.user.domain.User;
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
