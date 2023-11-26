package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "modelname")
    private String modelname;
    @Column(name = "status")
    private String status;
    @ManyToOne()
//    @JsonIgnore
    @JsonBackReference
    private Brand brand;
    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    @OneToMany(mappedBy = "shoeModel",cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<CustomizedShoe> customizedShoes = new HashSet<>();

}
