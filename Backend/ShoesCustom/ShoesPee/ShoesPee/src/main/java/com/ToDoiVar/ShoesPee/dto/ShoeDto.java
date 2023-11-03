package com.ToDoiVar.ShoesPee.dto;

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
}
