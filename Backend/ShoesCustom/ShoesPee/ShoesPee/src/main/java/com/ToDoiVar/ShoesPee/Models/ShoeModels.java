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
    private int modelId;
    @Column(name = "brandid")
    private int brandId;
    @Column(name = "modelname")
    private String modelname;
    @Column(name = "imageurl")
    private String imageurl;

//    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    @JoinColumn(name = "brandid",referencedColumnName = "brandid")
//    private Brand brand;

}
