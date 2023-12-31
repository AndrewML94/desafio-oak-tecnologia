package com.dev.backend.models.repositories;

import com.dev.backend.models.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
  
}
