package com.example.ibas.controllers;

import com.example.ibas.dtos.ErrorResponseDTO;
import com.example.ibas.exceptions.UsernameAlreadyUsedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(UsernameAlreadyUsedException.class)
    public ResponseEntity<ErrorResponseDTO> handleUsernameAlreadyUsedException(UsernameAlreadyUsedException ex) {
        ErrorResponseDTO errorResponseDTO = new ErrorResponseDTO("This username is already taken", 100);
        return new ResponseEntity<>(errorResponseDTO, HttpStatus.BAD_REQUEST);
    }
}
