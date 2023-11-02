package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageDto {
    private int id;
    private String imageUrl;
//    private Shoe shoe;


}
