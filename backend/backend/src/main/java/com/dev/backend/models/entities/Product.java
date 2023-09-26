package com.dev.backend.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.UUID;
import org.hibernate.annotations.GenericGenerator;

/**
* Class responsible for parameterized attributes of the product table.
*/
@Entity
@Table(name = "products")
public class Product {
  @Id
  @GeneratedValue(generator = "uuid2")
  @GenericGenerator(name = "uuid2", strategy = "uuid2")
  private UUID id;

  private String name;

  private String description;

  private Double value;

  private Boolean available;

  /**
   * Class constructor method.
   */
  public Product(
      UUID id,
      String name,
      String description,
      Double value,
      Boolean available
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.available = available;
  }

  /**
   * Method responsible for capturing the id.
   */
  public UUID getId() {
    return id;
  }

  /**
   * Method responsible for inserting the id.
   */
  public void setId(UUID id) {
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
  public Boolean isAvailable() {
    return available;
  }

  /**
  * Method responsible for entering product availability.
  */
  public void setAvailable(Boolean available) {
    this.available = available;
  }
}
