package com.runway.timely.lead.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Lead not found")
public class LeadNotFountException extends RuntimeException {
}
