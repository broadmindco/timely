package io.nomondays.timely.auth.service;

import io.nomondays.timely.user.domain.User;

import java.util.Optional;

public interface AuthenticationService {

    public Optional<User> getCurrentUser();

}
