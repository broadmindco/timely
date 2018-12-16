package com.runway.timely.user.controller;

import com.runway.timely.auth.exception.UnauthorizedException;
import com.runway.timely.auth.service.AuthenticationService;
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

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final AuthenticationService authService;

    public UserController(UserService userService, AuthenticationService authService) {
        this.userService = userService;
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<UserResponse> createUser(
        @Valid @RequestBody UserRequest request
    ) {
        final var sender = this.authService
            .getCurrentUser()
            .orElseThrow(UnauthorizedException::new);

        if(this.userService.existsByEmail(request.getEmail())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        final var user = new User();
        user.setEmail(request.getEmail().toLowerCase());
        user.setPassword(request.getPassword());

        final var roles = request.getRoles();

        user.setRoles(roles);

        final var response = this.userService
            .createUser(user, sender)
            .map(UserResponse::new)
            .orElseThrow(IllegalStateException::new);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
