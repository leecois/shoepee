package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Entity
@Table(name = "tblimage")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImageShoe {
    @Id
    @Column(name = "iamgeid")
    private int id;
    @Column(name = "imageurl")
    private String imageUrl;
    @Column(name = "shoeid")
    private int shoeId;

}
