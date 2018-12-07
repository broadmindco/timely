package com.runway.timely.auth.controller;

import com.runway.timely.auth.dto.LoginRequest;
import com.runway.timely.auth.domain.Session;
import com.runway.timely.auth.dto.LoginResponse;
import com.runway.timely.auth.exception.LoginFailedException;
import com.runway.timely.auth.service.AuthenticationService;
import com.runway.timely.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {


    private final AuthenticationService authenticationService;
    private final UserService userService;

    public AuthenticationController(
        AuthenticationService authenticationService,
        UserService userService
    ) {
        this.authenticationService = authenticationService;
        this.userService = userService;
    }

    @PostMapping()
    public ResponseEntity<LoginResponse> login(
        @Valid @RequestBody LoginRequest loginRequest,
        HttpSession httpSession
    ) {

        final var user = this.authenticationService
            .authenticate(loginRequest)
            .orElseThrow(LoginFailedException::new);

        var session = new Session(UUID.fromString(httpSession.getId()), user);

        var auth = new UsernamePasswordAuthenticationToken(
            session,
            null,
            session.getRoles()
        );

        SecurityContextHolder.getContext().setAuthentication(auth);

        final var response = new LoginResponse(session.getSessionId(), user);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }


    @DeleteMapping
    public ResponseEntity<String> logout(
        HttpSession session
    ) {
        session.invalidate();
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
