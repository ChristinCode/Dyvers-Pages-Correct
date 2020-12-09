package com.dyvrspages3.demo.storages.repositories;

import org.springframework.data.repository.CrudRepository;

import com.dyvrspages3.demo.entities.Store;

public interface StoreRepository extends CrudRepository<Store, Long> {
}
