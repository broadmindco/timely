package com.runway.timely.user.service;

import com.runway.timely.user.domain.Role;
import com.runway.timely.user.domain.RoleName;
import com.runway.timely.user.domain.User;
import com.runway.timely.user.repository.UserRepository;
import com.runway.timely.util.Guard;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.Optional;
import java.util.Set;

@Service
class DefaultUserService implements UserService {

    private final UserRepository userRepository;

    public DefaultUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> createUser(User user, User sender) {
        Guard.requireNonNull(user, "User cannot be null!");
        Guard.requireNonNull(sender, "Sender cannot be null!");
        return Optional.of(this.userRepository.save(user));
    }

    @Override
    public Optional<User> getCurrentUser() {
        final var authentication = SecurityContextHolder
            .getContext()
            .getAuthentication();

        if("superadmin".equals(authentication.getName()) && authentication.isAuthenticated()) {
            return this.buildAdminUser();
        }

        return this.userRepository.findByEmail(authentication.getName());
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return this.userRepository.findByEmail(email.toLowerCase());
    }

    @Override
    public boolean existsByEmail(String email) {
        return this.userRepository.existsByEmail(email);
    }

    // Todo Add superadmin to configuration.
    // Todo A superadmin can login

    private Optional<User> buildAdminUser() {
        final var user = new User();
        user.setEmail("superadmin@example.com");

        final var roles = Set.of(new Role(RoleName.ADMIN), new Role(RoleName.SUPERADMIN));
        user.setRoles(roles);

        return Optional.of(user);
    }

}
