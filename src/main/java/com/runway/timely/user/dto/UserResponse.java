package com.runway.timely.user.dto;

import com.runway.timely.user.domain.Role;
import com.runway.timely.user.domain.RoleName;
import com.runway.timely.user.domain.User;
import com.runway.timely.util.Guard;

import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

public class UserResponse {

    private final String email;
    private final UUID id;
    private final Set<RoleName> roles;

    public UserResponse(User user) {
        Guard.requireNonNull(user, "User cannot be null!");
        this.email = user.getEmail();
        this.id = user.getId();
        this.roles = user.getRoles()
            .stream()
            .map(Role::getName)
            .collect(Collectors.toSet());
    }

    public Set<RoleName> getRoles() {
        return roles;
    }

    public String getEmail() {
        return email;
    }

    public UUID getId() {
        return id;
    }

}
