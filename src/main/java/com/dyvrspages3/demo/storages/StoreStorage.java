package com.dyvrspages3.demo.storages;

import org.springframework.stereotype.Service;

import com.dyvrspages3.demo.entities.Store;
import com.dyvrspages3.demo.storages.repositories.StoreRepository;

import java.util.Collection;
import java.util.List;
import java.util.Random;

@Service
public class StoreStorage {
    private final StoreRepository storeRepo;

    public StoreStorage(StoreRepository storeRepo) {
        this.storeRepo = storeRepo;
    }

    public StoreRepository getStoreRepo() {
        return storeRepo;
    }

    public Store findById(long id) {
        return storeRepo.findById(id).get();
    }

    public Collection<Store> findAllStores() {
        return (Collection<Store>) storeRepo.findAll();
    }

    public void save(Store store) {
        storeRepo.save(store);
    }

    public void delete(long id) {
        storeRepo.deleteById(id);
    }

    public Store findRandom() {
        Random random = new Random();
        List<Store> storeList = (List<Store>) storeRepo.findAll();
        int randomIndex = random.nextInt(storeList.size());
        return storeList.get(randomIndex);
    }

}
