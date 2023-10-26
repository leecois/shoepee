package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Entity
@Table(name = "tblshoe")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Shoe {
    @Id
    @Column(name = "shoeid")
    private int id;
    @Column(name = "modelid")
    private int modelId;
    @Column(name = "price")
    private double price;
    @Column(name = "description")
    private String description;
    @Column(name = "imageurl")
    private String imageUrl;


}
