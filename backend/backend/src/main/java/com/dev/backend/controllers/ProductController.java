package com.dev.backend.controllers;

import com.dev.backend.models.entities.Product;
import com.dev.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
* Class responsible for the application's controller layer.
*/
@RestController
public class ProductController {
  @Autowired
  private ProductService productService;

  /**
  * Application post method for creating a new product.
  */
  @PostMapping("/products")
  public ResponseEntity<Product> createProduct(@RequestBody Product product) {
    return ResponseEntity.status(HttpStatus.CREATED).body(productService.createProduct(product));
  }
}
