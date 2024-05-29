package com.bahiavisual.apiCOMPRAS.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> errorBadRequest(Exceptions exceptions){
        return new ResponseEntity(exceptions.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> errorNotFoundException(NotFoundException exception){
        return new ResponseEntity(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
}
