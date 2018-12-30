package io.nomondays.timely.auth.config;

import com.runway.timely.auth.domain.CustomUserDetails;
import com.runway.timely.auth.exception.LoginFailedException;
import com.runway.timely.user.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
class CustomUserDetailsService implements UserDetailsService {

    private final UserService userService;

    public CustomUserDetailsService(UserService userService){
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) {
        final var user = userService
            .findByEmail(email.toLowerCase())
            .orElseThrow(LoginFailedException::new);
        return new CustomUserDetails(user);
    }

}
