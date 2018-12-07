package com.runway.timely.user.controller;

import com.runway.timely.user.domain.Role;
import com.runway.timely.user.domain.RoleName;
import com.runway.timely.user.domain.User;
import com.runway.timely.user.dto.UserRequest;
import com.runway.timely.user.dto.UserResponse;
import com.runway.timely.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public ResponseEntity<UserResponse> createUser(
        @Valid @RequestBody UserRequest request
    ) {
        final var sender = this.userService
            .getCurrentUser()
            .orElseThrow(EntityNotFoundException::new);

        if(this.userService.existsByEmail(request.getEmail())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        final var user = new User();
        user.setEmail(request.getEmail().toLowerCase());
        user.setPassword(request.getPassword());

        final var roles = request
            .getRoles()
            .stream()
            .map(Role::new).collect(Collectors.toSet());

        user.setRoles(roles);

        final var response = this.userService
            .createUser(user, sender)
            .map(UserResponse::new)
            .orElseThrow(EntityNotFoundException::new);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
