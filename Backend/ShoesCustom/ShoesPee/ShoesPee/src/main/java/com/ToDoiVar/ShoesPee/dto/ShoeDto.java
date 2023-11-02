package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoeDto {
    private int id;
    private int modelId;
    private double price;
    private String description;
    private String imageUrl;
    private ShoeModel shoeModel;

    public ShoeModel getShoeModel() {
        return shoeModel;
    }

    public void setShoeModel(ShoeModel shoeModel) {
        this.shoeModel = shoeModel;
    }
}
