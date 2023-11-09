package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.Brand;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShoeModelDto {

    private int id;
//    private int brandId;
    private String modelname;
    private String imageurl;
    private double price;
    private BrandDto brandDto;
//    private Brand brand;
//
//    public Brand getBrand() {
//        return brand;
//    }
//
//    public void setBrand(Brand brand) {
//        this.brand = brand;
//    }
}
