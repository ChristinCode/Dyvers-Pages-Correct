package com.dyvrspages3.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Category {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String image;
    @OneToMany(mappedBy = "category")
    private Collection<Store> store;

    protected Category() {
    }

    public Category(String name, String image) {
        this.name = name;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public Collection<Store> getStore() {
        return store;
    }
}
