package io.nomondays.timely.auth.service;

import io.nomondays.timely.user.domain.User;
import io.nomondays.timely.user.service.UserService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
class DefaultAuthenticationService implements AuthenticationService {

    private final UserService userService;

    public DefaultAuthenticationService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public Optional<User> getCurrentUser() {

        final var email = SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getName();

        return this.userService.findByEmail(email);

    }
}
