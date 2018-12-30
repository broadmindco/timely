package io.nomondays.timely.user.event;

import io.nomondays.timely.user.domain.Role;
import io.nomondays.timely.user.service.UserService;
import io.nomondays.timely.user.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;

@Component
public class AdminCreationEventListener {

    private final Logger logger = LoggerFactory.getLogger(AdminCreationEventListener.class);
    private final UserService userService;

    // Todo add email validation
    private final String username;

    private final String password;
    private final Set<Role> roles;

    public AdminCreationEventListener(
        UserService userService,
        @Value("${spring.security.user.name}") String username,
        @Value("${spring.security.user.password}") String password,
        @Value("${spring.security.user.roles}") Set<Role> roles
    ) {
        this.userService = userService;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void doSomethingAfterStartup() {

        if(!this.userService.existsByEmail(this.username)) {
            logger.info("Admin account does not exist, creating... ");
            this.createAdminAccount();
        } else {
            logger.info("Admin account already exists, going on...");
        }

    }

    private void createAdminAccount() {

        final var user = new User();
        user.setEmail(this.username);
        user.setPassword(this.password);
        user.setRoles(this.roles);

        // Setting Security context to not fail Preauthorization
        var auth = new UsernamePasswordAuthenticationToken(
            user.getEmail(),
            user.getPassword(),
            user.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.name())).collect(Collectors.toSet())
        );

        SecurityContextHolder.getContext().setAuthentication(auth);

        this.userService.createUser(user, user);
    }

}
