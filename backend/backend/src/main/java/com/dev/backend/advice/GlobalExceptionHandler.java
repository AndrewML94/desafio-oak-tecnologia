package com.dev.backend.advice;

import com.dev.backend.exception.InternalServerErrorException;
import com.dev.backend.exception.MissingFieldException;
import com.dev.backend.exception.ProductNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Class responsible for managing http errors.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

  /**
   * Method referring to error 400.
   */
  @ExceptionHandler(MissingFieldException.class)
  public ResponseEntity<ErrorResponse> handleMissingFieldException(MissingFieldException e) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Bad Request",
        "Campo obrigatório não preenchido!",
        HttpStatus.BAD_REQUEST.value()
      );

    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
  }
  
  /**
   * Method referring to error 404.
   */
  @ExceptionHandler(ProductNotFoundException.class)
  public ResponseEntity<ErrorResponse> handleProductNotFoundException(ProductNotFoundException e) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Not Found",
        "Produto com o código informado não foi encontrado!",
        HttpStatus.NOT_FOUND.value()
      );

    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
  }


  /**
   * Method referring to error 500.
   */
  @ExceptionHandler(InternalServerErrorException.class)
  public ResponseEntity<ErrorResponse> handleInternalServerErrorException(
      InternalServerErrorException e
  ) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Internal Server Error",
        "Ops! Ocorreu um erro!",
        HttpStatus.INTERNAL_SERVER_ERROR.value()
    );

    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
  }
}
