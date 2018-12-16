package com.runway.timely.user.dto;

import com.runway.timely.user.domain.Role;

import javax.validation.constraints.NotNull;
import java.util.Set;

public class UserRequest {

    @NotNull
    private String email;

    @NotNull
    private String password;

    @NotNull
    private Set<Role> roles;

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
