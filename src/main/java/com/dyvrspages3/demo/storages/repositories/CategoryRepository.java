package com.dyvrspages3.demo.storages.repositories;

import org.springframework.data.repository.CrudRepository;

import com.dyvrspages3.demo.entities.Category;

public interface CategoryRepository extends CrudRepository<Category, Long> {

}
