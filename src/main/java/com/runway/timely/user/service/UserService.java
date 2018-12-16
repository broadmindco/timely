package com.runway.timely.user.service;

import com.runway.timely.user.domain.User;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.validation.constraints.NotNull;
import java.util.Optional;
import java.util.UUID;

public interface UserService {

    @PreAuthorize("#sender.isAdmin()")
    Optional<User> createUser(User user, User sender);

    Optional<User> findByEmail(String email);

    Optional<User> findById(UUID id);

    boolean existsByEmail(@NotNull(message = "Email cannot be null") String email);

}
