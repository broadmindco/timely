package com.runway.timely.lead.converter;

import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.dto.LeadRequest;
import com.runway.timely.lead.dto.LeadResponse;

public interface LeadConverter {

    Lead toLead(LeadRequest request);
    LeadResponse toLeadResponse(Lead lead);
    void update(Lead lead, LeadRequest request);
}
