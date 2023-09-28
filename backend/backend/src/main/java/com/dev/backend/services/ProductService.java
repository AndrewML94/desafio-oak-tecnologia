package com.dev.backend.services;

import com.dev.backend.exception.ProductNotFoundException;
import com.dev.backend.models.entities.Product;
import com.dev.backend.models.repositories.ProductRepository;
import java.util.List;
import java.util.Optional;
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

  /**
   * Service layer method responsible for get all products.
   */
  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  /**
   * Service layer method responsible for delete a product.
   */
  public void deleteProduct(Integer id) {
    Optional<Product> product = productRepository.findById(id);

    if (product.isEmpty()) {
      throw new ProductNotFoundException();
    }
  }
}
