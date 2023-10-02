package com.dev.backend.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * Class responsible for parameterized attributes of the product table.
 */
@Entity
@Table(name = "products")
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @NotBlank
  private String name;

  @NotBlank
  private String description;

  @NotNull
  private Double value;

  @NotNull
  private Boolean available;

  public Product() {

  }

  /**
   * Method responsible for capturing the id.
   */
  public Integer getId() {
    return id;
  }

  /**
   * Method responsible for inserting the id.
   */
  public void setId(Integer id) {
    this.id = id;
  }

  /**
   * Method responsible for capturing the product name.
   */
  public String getName() {
    return name;
  }

  /**
   * Method responsible for inserting the product name.
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Method responsible for capturing the product description.
   */
  public String getDescription() {
    return description;
  }

  /**
   * Method responsible for inserting the product description.
   */
  public void setDescription(String description) {
    this.description = description;
  }

  /**
   * Method responsible for capturing the product value.
   */
  public Double getValue() {
    return value;
  }

  /**
   * Method responsible for inserting the product value.
   */
  public void setValue(Double value) {
    this.value = value;
  }

  /**
   * Method responsible for bringing product availability.
   */
  public Boolean getAvailable() {
    return available;
  }

  /**
  * Method responsible for entering product availability.
  */
  public void setAvailable(Boolean available) {
    this.available = available;
  }
}
