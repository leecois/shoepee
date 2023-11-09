package com.ToDoiVar.ShoesPee.Models;

import com.ToDoiVar.ShoesPee.dto.ShoeDto;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "tblshoe")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Shoe {
    @Id
    @Column(name = "shoeid")
    private int id;
//    @Column(name = "modelid")
//    private int modelId;
    @Column(name = "price")
    private double price;
    @Column(name = "description")
    private String description;
    @Column(name = "imageurl")
    private String imageUrl;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "shoe_model_modelid") // ensure this is the correct column name for the foreign key

    private ShoeModel shoeModel;
//    @OneToOne()
//    private CartItem cartItem;

//    @OneToMany(mappedBy = "shoe",cascade = CascadeType.ALL)
//    private Set<ImageShoe> imageShoes = new HashSet<>();
//
//    public Set<ImageShoe> getImageShoes() {
//        return imageShoes;
//    }
//
//    public void setImageShoes(Set<ImageShoe> imageShoes) {
//        this.imageShoes = imageShoes;
//    }
//@JsonIgnore
//@OneToMany(fetch = FetchType.LAZY, mappedBy = "shoe")
//private List<Cart> carts;
    public Shoe(ShoeDto shoeDto,ShoeModel shoeModel){
        this.price = shoeDto.getPrice();
        this.description = shoeDto.getDescription();
        this.imageUrl = shoeDto.getImageUrl();
        this.shoeModel = shoeModel;
    }
}
