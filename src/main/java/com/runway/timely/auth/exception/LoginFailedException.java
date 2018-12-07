package com.runway.timely.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED, reason = "Username or password is wrong")
public class LoginFailedException extends RuntimeException {
}
