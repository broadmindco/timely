package com.runway.timely.auth.service;

import com.runway.timely.auth.dto.LoginRequest;
import com.runway.timely.user.domain.User;
import com.runway.timely.user.service.UserService;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
class DefaultAuthenticationService implements AuthenticationService {

    private final UserService userService;

    public DefaultAuthenticationService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public Optional<User> authenticate(LoginRequest loginRequest) {

        final var user = this.userService
            .findByEmail(loginRequest.getEmail())
            .orElseThrow(EntityNotFoundException::new);

        if (!BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())) {
            return Optional.empty();
        }

        return Optional.of(user);

    }

}
