package com.runway.timely.user.dto;

import com.runway.timely.user.domain.RoleName;

import javax.validation.constraints.NotNull;
import java.util.Set;

public class UserRequest {

    @NotNull
    private String email;

    @NotNull
    private String password;

    @NotNull
    private Set<RoleName> roles;

    public Set<RoleName> getRoles() {
        return roles;
    }

    public void setRoles(Set<RoleName> roles) {
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
