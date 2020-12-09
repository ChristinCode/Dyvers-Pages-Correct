package com.dyvrspages3.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Store {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String phoneNumber;
    private String address;
    private String website;
    private String storeHours;
    private String image;
    @Column(length = 100000)
    @Lob
    private String description;
    private String productList;
    @JsonIgnore
    @ManyToOne
    private Category category;

    protected Store() {
    }

    public Store(String name, String phoneNumber, String address, String website, String storeHours, String image, String description, String productList, Category category) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.website = website;
        this.storeHours = storeHours;
        this.image = image;
        this.description = description;
        this.productList = productList;
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getStoreHours() {
        return storeHours;
    }

    public void setStoreHours(String storeHours) {
        this.storeHours = storeHours;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductList() {
        return productList;
    }

    public void setProductList(String productList) {
        this.productList = productList;
    }
}
