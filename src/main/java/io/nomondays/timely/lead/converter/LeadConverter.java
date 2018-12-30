package io.nomondays.timely.lead.converter;

import io.nomondays.timely.lead.domain.Lead;
import io.nomondays.timely.lead.dto.LeadRequest;
import io.nomondays.timely.lead.dto.LeadResponse;

public interface LeadConverter {

    Lead toLead(LeadRequest request);
    LeadResponse toLeadResponse(Lead lead);
    void update(Lead lead, LeadRequest request);
}
