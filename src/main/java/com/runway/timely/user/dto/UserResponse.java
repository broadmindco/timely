package com.runway.timely.user.dto;

import com.runway.timely.user.domain.Role;
import com.runway.timely.user.domain.User;
import com.runway.timely.util.Guard;

import java.util.Set;

public class UserResponse {

    private final String email;
    private final String id;
    private final Set<Role> roles;

    public UserResponse(User user) {
        Guard.requireNonNull(user, "User cannot be null!");
        this.email = user.getEmail();
        this.id = user.getId();
        this.roles = user.getRoles();
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public String getEmail() {
        return email;
    }

    public String getId() {
        return id;
    }
}
