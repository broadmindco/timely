package com.runway.timely.user.service;

import com.runway.timely.user.domain.User;
import com.runway.timely.user.repository.UserRepository;
import com.runway.timely.util.Guard;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

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
    public Optional<User> findByEmail(String email) {
        return this.userRepository.findByEmail(email.toLowerCase());
    }

    @Override
    public boolean existsByEmail(String email) {
        return this.userRepository.existsByEmail(email);
    }

    @Override
    public Optional<User> findById(UUID id) {
        return this.userRepository.findById(id);
    }
}
