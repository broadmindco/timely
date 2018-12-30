package io.nomondays.timely.auth.domain;

import io.nomondays.timely.user.domain.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.io.Serializable;
import java.util.Set;
import java.util.stream.Collectors;

public class UserSession implements Serializable {

    private final String id;
    private final String password;
    private final String email;
    private final Set<SimpleGrantedAuthority> roles;

    public UserSession(User user) {
        this.id = user.getId();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.roles = user.getRoles()
            .stream()
            .map(r -> new SimpleGrantedAuthority(r.name()))
            .collect(Collectors.toSet());
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return this.password;
    }

    public Set<SimpleGrantedAuthority> getRoles() {
        return roles;
    }

    public String getEmail() {
        return email;
    }
}
