package io.nomondays.timely.lead.repository;

import io.nomondays.timely.lead.domain.Lead;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeadRepository extends MongoRepository<Lead, String> {

}
