package com.runway.timely.lead.converter;

import com.runway.timely.lead.domain.Lead;
import com.runway.timely.lead.dto.LeadRequest;

public interface LeadConverter {

    Lead convertToLead(LeadRequest request);
    LeadRequest convertToLeadRequest(Lead lead);

}
