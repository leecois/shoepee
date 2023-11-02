package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tblbrand")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Brand {
    @Id
    @Column(name = "brandid")
    private int brandId;
    @Column(name = "brandname")
    private String brandName;
    @Column(name = "imageurl")
    private String imageUrl;


//    public long getBrandId() {
//        return brandId;
//    }
//
//    public void setBrandId(long brandId) {
//        this.brandId = brandId;
//    }
//
//    public String getBrandName() {
//        return brandName;
//    }
//
//    public void setBrandName(String brandName) {
//        this.brandName = brandName;
//    }
}
