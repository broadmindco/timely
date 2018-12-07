package com.runway.timely.auth.domain;

import com.runway.timely.user.domain.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.io.Serializable;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

public class Session implements Serializable {

    private final UUID userId;
    private final UUID sessionId;
    private final String email;
    private final Set<SimpleGrantedAuthority> roles;

    public Session(UUID sessionId, User user) {
        this.userId = user.getId();
        this.sessionId = sessionId;
        this.email = user.getEmail();
        this.roles = user.getRoles()
            .stream()
            .map(r -> new SimpleGrantedAuthority(r.getName().name()))
            .collect(Collectors.toSet());
    }

    public UUID getUserId() {
        return userId;
    }

    public UUID getSessionId() {
        return sessionId;
    }

    public String getEmail() {
        return email;
    }

    public Set<SimpleGrantedAuthority> getRoles() {
        return roles;
    }
}
