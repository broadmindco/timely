package com.runway.timely.user.repository;

import com.runway.timely.user.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends MongoRepository<User, UUID> {

    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

}
