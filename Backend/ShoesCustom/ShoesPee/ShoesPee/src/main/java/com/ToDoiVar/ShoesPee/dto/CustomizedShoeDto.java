package com.ToDoiVar.ShoesPee.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CustomizedShoeDto {
    private int id;
    private String name;
    private double price;
    private String description;
    private String imageUrl;
    private String status;
    private boolean stock;
    private int shoeQuantity;
    private ShoeModelDto shoeModelDto;
//    private List<ImageDto> images;

    public ShoeModelDto getShoeModelDto() {
        return shoeModelDto;
    }

    public void setShoeModelDto(ShoeModelDto shoeModelDto) {
        this.shoeModelDto = shoeModelDto;
    }

}
