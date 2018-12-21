package com.runway.timely.lead.service;

import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.repository.LeadRepository;
import com.runway.timely.user.domain.User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Stream;

@Service
class DefaultLeadService implements LeadService {

    private final LeadRepository leadRepository;

    DefaultLeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @Override
    public Optional<Lead> save(Lead lead, User sender) {
        return Optional.of(this.leadRepository.save(lead));
    }

    @Override
    public Stream<Lead> findAll(User sender) {
        return this.leadRepository
            .findAll()
            .stream();
    }

}
