package com.runway.timely.auth.service;

import com.runway.timely.auth.dto.LoginRequest;
import com.runway.timely.user.domain.User;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface AuthenticationService {

    public Optional<User> authenticate(LoginRequest loginRequeste);

}
