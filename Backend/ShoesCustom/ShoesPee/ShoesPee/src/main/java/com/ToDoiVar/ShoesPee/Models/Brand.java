package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tblbrand")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Brand {
    @Id
    @Column(name = "brandid")
    private int id;
    @Column(name = "brandname")
    private String brandName;
    @Column(name = "imageurl")
    private String imageUrl;
    @Column(name = "status")
    private String status ;
    @OneToMany(mappedBy = "brand")
    @JsonManagedReference
    private Set<ShoeModel> shoeModel  = new HashSet<>();

    public Set<ShoeModel> getShoeModel(Set<ShoeModel> shoeModel) {
        return shoeModel;
    }

    public void setShoeModel(Set<ShoeModel> shoeModel) {
        this.shoeModel = shoeModel;
    }
}
