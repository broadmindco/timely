package com.runway.timely.lead.converter;

import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.dto.LeadRequest;
import com.runway.timely.lead.dto.LeadResponse;
import org.springframework.stereotype.Service;

@Service
class DefaultLeadConverter implements LeadConverter {

    @Override
    public Lead toLead(LeadRequest request) {
        final var lead = new Lead();
        this.update(lead, request);
        return lead;
    }

    @Override
    public LeadResponse toLeadResponse(Lead lead) {
        return new LeadResponse(lead);
    }

    @Override
    public void update(Lead lead, LeadRequest request) {
        lead.setStatus(request.getStatus());
        lead.setAddress(request.getAddress());
        lead.setContacts(request.getContacts());
        lead.setName(request.getName());
        lead.setSocial(request.getSocial());
        lead.setImageUrl(request.getImageUrl());
    }

}
