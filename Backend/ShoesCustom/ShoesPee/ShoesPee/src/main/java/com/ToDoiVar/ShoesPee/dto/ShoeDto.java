package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoeDto {
    private int id;
    private double price;
    private String description;
    private String imageUrl;
    private String status;
    private ShoeModelDto shoeModelDto;

    public ShoeModelDto getShoeModelDto() {
        return shoeModelDto;
    }

    public void setShoeModelDto(ShoeModelDto shoeModelDto) {
        this.shoeModelDto = shoeModelDto;
    }

}
