package com.dev.backend.services;

import com.dev.backend.models.entities.Product;
import com.dev.backend.models.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Class responsible for the application's service layer.
 */
@Service
public class ProductService {
  @Autowired
  private ProductRepository productRepository;

  /**
   * Service layer method responsible for creating a new product.
   */
  public Product createProduct(Product product) {
    return productRepository.save(product);
  }
}
