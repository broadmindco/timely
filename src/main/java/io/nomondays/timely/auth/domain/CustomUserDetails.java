package com.runway.timely.auth.domain;

import com.runway.timely.user.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class CustomUserDetails implements UserDetails {

    private final UserSession userSession;

    public CustomUserDetails(User user){
        this.userSession = new UserSession(user);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.userSession.getRoles();
    }

    @Override
    public boolean isAccountNonExpired(){
        return true;
    }

    @Override
    public boolean isAccountNonLocked(){
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired(){
        return true;
    }

    @Override
    public boolean isEnabled(){
        return true;
    }

    @Override
    public String getUsername(){
        return this.userSession.getEmail().toLowerCase();
    }

    @Override
    public String getPassword(){
        return this.userSession.getPassword();
    }

}



