package com.dev.backend.dto;

/**
 * Dto responsible for abstracting sensitive information
 * from the application in the request response.
 */
public record ProductResponseDto(
    Integer productCode,
    String name,
    String description,
    Double value,
    Boolean available
) {}