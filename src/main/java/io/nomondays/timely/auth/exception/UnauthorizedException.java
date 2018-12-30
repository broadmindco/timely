package io.nomondays.timely.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE, reason = "No session")
public class UnauthorizedException extends RuntimeException {

}
