package com.runway.timely.user.service;

import com.runway.timely.user.domain.User;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Transactional
public interface UserService {

    @PreAuthorize("#user == #sender or #sender.isAdmin()")

    Optional<User> createUser(User user, User sender);

    Optional<User> getCurrentUser();

    Optional<User> findByEmail(String email);

    boolean existsByEmail(@NotNull(message = "Email cannot be null") String email);

}
