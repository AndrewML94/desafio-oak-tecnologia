package com.dev.backend.advice;

import com.dev.backend.exception.ProductNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;
import org.springframework.web.servlet.NoHandlerFoundException;

/**
 * Class responsible for managing http errors.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

  /**
   * Method referring to error 400 to handle the lack of a mandatory field.
   */
  @ExceptionHandler(MethodArgumentNotValidException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ErrorResponse handleMethodArgumentNotValidException(
      MethodArgumentNotValidException e
  ) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Bad Request",
        "Campo obrigatório " + e.getBindingResult()
            .getFieldError().getField() + " não preenchido!",
        HttpStatus.BAD_REQUEST.value()
      );

    return errorResponse;
  }
  
  /**
   * Method referring to the 404 error to handle an id of a product that does not exist.
   */
  @ExceptionHandler(ProductNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public ErrorResponse handleProductNotFoundException(ProductNotFoundException e) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Not Found",
        "Produto com o id informado não foi encontrado!",
        HttpStatus.NOT_FOUND.value()
      );

    return errorResponse;
  }

  /**
   * Method referring to the 404 error to handle a route that does not exist.
   */
  @ExceptionHandler(NoHandlerFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public ErrorResponse handleNoHandlerFoundException(NoHandlerFoundException e) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Not Found",
        "Rota não existe!",
        HttpStatus.NOT_FOUND.value()
      );

    return errorResponse;
  }

  /**
   * Error 500 method for handling a server-side error.
   */
  @ExceptionHandler(InternalServerError.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorResponse handleInternalServerErrorException(
      InternalServerError e
  ) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Internal Server Error",
        "Ops! Ocorreu um erro!",
        HttpStatus.INTERNAL_SERVER_ERROR.value()
    );

    return errorResponse;
  }

  /**
   * Method referring to error 500 to handle a nullPointerException error.
   */
  @ExceptionHandler(NullPointerException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorResponse handleInternalServerErrorException(
      NullPointerException e
  ) {
    ErrorResponse errorResponse = new ErrorResponse(
        "Null Pointer Exception",
        "Ops! Ocorreu um erro!",
        HttpStatus.INTERNAL_SERVER_ERROR.value()
    );

    return errorResponse;
  }
}
