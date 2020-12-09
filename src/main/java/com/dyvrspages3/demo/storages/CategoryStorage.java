package com.dyvrspages3.demo.storages;

import org.springframework.stereotype.Service;

import com.dyvrspages3.demo.entities.Category;
import com.dyvrspages3.demo.storages.repositories.CategoryRepository;

import java.util.Collection;

@Service
public class CategoryStorage {
    private final CategoryRepository categoryRepo;

    public CategoryStorage(CategoryRepository categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    public CategoryRepository getCategoryRepo() {
        return categoryRepo;
    }

    public Collection<Category> findAll() {
        return (Collection<Category>) categoryRepo.findAll();
    }

    public Category findById(Long id) {
        return categoryRepo.findById(id).get();
    }
}
