package com.ToDoiVar.ShoesPee.repositiory;

import jakarta.persistence.*;

@Entity
@Table(name = "tblbrand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "brandid")
    private long brandId;
    @Column(name = "brandname")
    private String brandName;

    public Brand() {
    }

    public Brand(long brandId, String brandName) {
        this.brandId = brandId;
        this.brandName = brandName;
    }

    public long getBrandId() {
        return brandId;
    }

    public void setBrandId(long brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }
}
