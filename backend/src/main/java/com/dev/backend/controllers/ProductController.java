package com.dev.backend.controllers;

import com.dev.backend.models.entities.Product;
import com.dev.backend.services.ProductService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class responsible for the application's controller layer.
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
  @Autowired
  private ProductService productService;

  /**
   * Application post method for creating a new product.
   */
  @PostMapping("/")
  public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {

    return ResponseEntity.status(HttpStatus.CREATED).body(productService.createProduct(product));
  }

  /**
   * Application get method to get all products.
   */
  @GetMapping("/")
  public ResponseEntity<List<Product>> getAllProducts() {
    List<Product> allProducts = productService.getAllProducts();

    return ResponseEntity.ok().body(allProducts);
  }

  /**
   * Application get method to update product.
   */
  @PutMapping("/{id}")
  public ResponseEntity<Product> updateProduct(
      @PathVariable(value = "id") Integer id,
      @Valid @RequestBody Product product
  ) {

    return ResponseEntity.status(HttpStatus.OK).body(productService.updateProduct(id, product));

  }

  /**
   * Application post method for delete a product.
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteProduct(@PathVariable(value = "id") Integer id) {
    productService.deleteProduct(id);
    
    return ResponseEntity.noContent().build();
  }
}
