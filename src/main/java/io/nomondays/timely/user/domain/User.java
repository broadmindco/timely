package com.runway.timely.user.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@Document
public class User {

    @Id
    private String id;

    @Indexed(unique = true)
    private String email;

    private String password;

    private Set<Role> roles = new HashSet<>();

    public boolean isAdmin() {
        final var role = this.roles
            .stream()
            .filter(Role.ADMIN::equals)
            .findFirst();
        return role.isPresent();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
    }

    public Set<Role> getRoles() {
        return roles;

    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
