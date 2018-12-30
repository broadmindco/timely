package com.runway.timely.lead.repository;

import com.runway.timely.lead.domain.Lead;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LeadRepository extends MongoRepository<Lead, String> {

}
