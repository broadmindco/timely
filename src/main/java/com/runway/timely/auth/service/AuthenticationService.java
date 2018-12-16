package com.runway.timely.auth.service;

import com.runway.timely.user.domain.User;

import java.util.Optional;

public interface AuthenticationService {

    public Optional<User> getCurrentUser();

}
