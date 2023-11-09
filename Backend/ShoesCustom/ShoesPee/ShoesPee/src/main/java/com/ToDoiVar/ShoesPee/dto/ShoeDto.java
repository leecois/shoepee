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
    private ShoeModelDto shoeModelDto;

    public ShoeModelDto getShoeModelDto() {
        return shoeModelDto;
    }

    public void setShoeModelDto(ShoeModelDto shoeModelDto) {
        this.shoeModelDto = shoeModelDto;
    }

}
