package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tblshoemodel")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoeModel {
    @Id
        @Column(name = "modelid")
    private int id;
//    @Column(name = "brandid")
//    private int brandId;
    @Column(name = "modelname")
    private String modelname;
    @Column(name = "imageurl")
    private String imageurl;
    @Column(name = "price")
    private double price;

    @ManyToOne()
    @JoinColumn(name = "brand_brandid")
    @JsonIgnore
    private Brand brand;

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    @OneToMany(mappedBy = "shoeModel",cascade = CascadeType.ALL)
    private Set<Shoe> shoe = new HashSet<>();


}
