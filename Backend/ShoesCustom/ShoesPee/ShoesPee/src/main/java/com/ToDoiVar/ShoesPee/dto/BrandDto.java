package com.ToDoiVar.ShoesPee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BrandDto {
    private int id;
    private String brandName;
    private String imageUrl;
    private String status;
//    private List<ShoeModel> shoeModel;

//    public List<ShoeModel> getShoeModel() {
//        return shoeModel;
//    }
//
//    public void setShoeModel(List<ShoeModel> shoeModel) {
//        this.shoeModel = shoeModel;
//    }
}
