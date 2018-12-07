package com.runway.timely.auth.dto;

import com.runway.timely.user.domain.User;
import com.runway.timely.user.dto.UserResponse;

import java.util.UUID;

public class LoginResponse {

    private final UUID sessionId;
    private final UserResponse user;

    public LoginResponse(UUID sessionId, User user) {
        this.sessionId = sessionId;
        this.user = new UserResponse(user);
    }

    public UUID getSessionId() {
        return sessionId;
    }

    public UserResponse getUser() {
        return user;
    }

}
