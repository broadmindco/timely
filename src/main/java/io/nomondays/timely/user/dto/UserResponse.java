package io.nomondays.timely.user.dto;

import io.nomondays.timely.user.domain.Role;
import io.nomondays.timely.user.domain.User;
import io.nomondays.timely.util.Guard;

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
