package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tblshoemodel")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShoeModels {
    @Id
    @Column(name = "modelid")
    private Long modelId;
    @Column(name = "brandid")
    private Long brandId;
    @Column(name = "modelname")
    private String modelName;
    @Column(name = "imageurl")
    private String imageUrl;

}
