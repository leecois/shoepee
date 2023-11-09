package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.PropertyGenerator.class,
//        property = "id")
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
    @JsonIgnore
    private Brand brand;

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    @OneToMany(mappedBy = "shoeModel",cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Shoe> shoes = new HashSet<>();

}
