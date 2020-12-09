package com.dyvrspages3.demo.Controllers;


import com.dyvrspages3.demo.entities.Store;
import com.dyvrspages3.demo.storages.CategoryStorage;
import com.dyvrspages3.demo.storages.StoreStorage;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class StoreController {
    private final StoreStorage storeStorage;

    private final CategoryStorage categoryStorage;

    public StoreController(StoreStorage storeStorage, CategoryStorage categoryStorage) {
        this.storeStorage = storeStorage;
        this.categoryStorage = categoryStorage;
    }

    public StoreStorage getStoreStorage() {
        return storeStorage;
    }


    @GetMapping("/api/stores/{id}")
    public Store findStoreById(@PathVariable long id) {
        return storeStorage.findById(id);
    }

    @GetMapping("/api/stores/random/")
    public Store findRandomStore() {
        return storeStorage.findRandom();
    }

    @PostMapping("/api/categories/store/add/")
    public Collection<Store> addStore(@RequestBody Store store) {
        storeStorage.save(store);
        return storeStorage.findAllStores();
    }

//    @PatchMapping("/api/stores/{id}/update-store/")
//    public Store updateStoreInfo(@PathVariable long id, @RequestBody Store store) {
//        Store storeToUpdate = storeStorage.findById(id);
//        Store updateToStore = new Store(store.getName(), store.getPhoneNumber(), store.getAddress(), store.getWebsite(), store.getStoreHours(), store.getImage(), store.getDescription(), store.getProductList(), store.getCategory());
//        storeStorage.save(updateToStore);
//        return storeStorage.findById(id);
//    }

    @PatchMapping("/api/stores/{id}/update-store/")
    public Store updateStoreInfo(@PathVariable long id, @RequestBody Store store) {
        Store storeToUpdate = storeStorage.findById(id);
        if (store.getName() != null) {
        storeToUpdate.setName(store.getName());
        }
        if (store.getPhoneNumber() != null) {
        storeToUpdate.setPhoneNumber(store.getPhoneNumber());
        }
        if (store.getAddress() != null) {
            storeToUpdate.setAddress(store.getAddress());
        }
        if (store.getWebsite() != null) {
            storeToUpdate.setWebsite(store.getWebsite());
        }
        if (store.getStoreHours() != null) {
            storeToUpdate.setStoreHours(store.getStoreHours());
        }
        if (store.getImage() != null) {
            storeToUpdate.setImage(store.getImage());
        }
        if (store.getDescription() != null) {
            storeToUpdate.setDescription(store.getDescription());
        }
        if (store.getProductList() != null) {
            storeToUpdate.setProductList(store.getProductList());
        }
        if (store.getCategory() != null) {
            storeToUpdate.setCategory(store.getCategory());
        }
        storeStorage.save(storeToUpdate);
        return storeToUpdate;
    }

    @DeleteMapping("/api/categories/{id}/")
    public Collection<Store> deleteStore(@PathVariable long id) {
        storeStorage.delete(id);
        return storeStorage.findAllStores();

    }

}
