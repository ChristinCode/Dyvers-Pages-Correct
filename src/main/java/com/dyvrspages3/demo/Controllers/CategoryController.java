package com.dyvrspages3.demo.Controllers;


import com.dyvrspages3.demo.entities.Category;
import com.dyvrspages3.demo.entities.Store;
import com.dyvrspages3.demo.storages.CategoryStorage;
import com.dyvrspages3.demo.storages.StoreStorage;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class CategoryController {
    private final CategoryStorage categoryStorage;
    private StoreStorage storeStorage;

    public CategoryController(CategoryStorage categoryStorage, StoreStorage storeStorage) {
        this.categoryStorage = categoryStorage;
        this.storeStorage = storeStorage;
    }

    public CategoryStorage getCategoryStorage() {
        return categoryStorage;
    }

    public StoreStorage getStoreStorage() {
        return storeStorage;
    }

    @GetMapping("/api/index/")
    public Collection<Category> findAllCategories() {
        return categoryStorage.findAll();
    }

    @GetMapping("/api/category/{id}/")
    public Category findCategoryById(@PathVariable Long id) {
        return categoryStorage.findById(id);
    }

    @GetMapping("/api/category/{id}/stores/")
    public Collection<Store> findAllStoresInCateogry(@PathVariable long id) {
        return categoryStorage.findById(id).getStore();
    }

    @PostMapping("/api/category/{id}/addStore/")
    public Collection<Store> addStoreFromCategory(@PathVariable long id, @RequestBody Store store) {
        Store storeToSave = new Store(store.getName(), store.getPhoneNumber(), store.getAddress(), store.getWebsite(), store.getStoreHours(), store.getImage(), store.getDescription(), store.getProductList(), categoryStorage.findById(id));
        storeStorage.save(storeToSave);
        return storeStorage.findAllStores();
    }
}
