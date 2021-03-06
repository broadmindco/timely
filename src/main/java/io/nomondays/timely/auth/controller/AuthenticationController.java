package io.nomondays.timely.auth.controller;

import io.nomondays.timely.auth.dto.LoginResponse;
import io.nomondays.timely.auth.service.AuthenticationService;
import io.nomondays.timely.auth.exception.UnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthenticationService authService;

    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

    @GetMapping
    public ResponseEntity<LoginResponse> getCurrentUser(
        HttpSession session
    ) {

        final var response = this.authService
            .getCurrentUser()
            .map(u -> new LoginResponse(session.getId(), u))
            .orElseThrow(UnauthorizedException::new);

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
