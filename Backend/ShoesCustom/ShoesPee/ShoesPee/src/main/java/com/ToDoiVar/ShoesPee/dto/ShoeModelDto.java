package com.ToDoiVar.ShoesPee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShoeModelDto {

    private int id;
    private String modelname;
    private String status;
    private BrandDto brandDto;
    private List<CustomizedShoeDto> shoes;
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
