package com.dev.backend.advice;

/**
 * Class responsible for the personalized message for errors.
 */
public class ErrorResponse {
  private String error;
  private String message;
  private int status;

  /**
   * Constructor.
   */
  public ErrorResponse(String error, String message, int status) {
    this.error = error;
    this.message = message;
    this.status = status;
  }

  /**
   * Method responsible for return the error name.
   */
  public String getError() {
    return error;
  }

  /**
   * Method responsible for inserting the error name.
   */
  public void setError(String error) {
    this.error = error;
  }

  /**
   * Method responsible for return the message.
   */
  public String getMessage() {
    return message;
  }

  /**
   * Method responsible for inserting the message.
   */
  public void setMessage(String message) {
    this.message = message;
  }

  /**
   * Method responsible for return the status code.
   */
  public int getStatus() {
    return status;
  }

  /**
   * Method responsible for inserting the status code.
   */
  public void setStatus(int status) {
    this.status = status;
  }

}
