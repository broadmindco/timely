package io.nomondays.timely.auth.dto;

import io.nomondays.timely.user.domain.User;
import io.nomondays.timely.user.dto.UserResponse;

public class LoginResponse {

    private final String sessionId;
    private final UserResponse user;

    public LoginResponse(String sessionId, User user) {
        this.sessionId = sessionId;
        this.user = new UserResponse(user);
    }

    public String getSessionId() {
        return sessionId;
    }

    public UserResponse getUser() {
        return user;
    }

}
