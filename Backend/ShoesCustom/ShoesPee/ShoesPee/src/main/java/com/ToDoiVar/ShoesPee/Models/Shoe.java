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
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
//    @Column(name = "modelid")
//    private int modelId;
    @Column(name = "price")
    private double price;
    @Column(name = "description")
    private String description;
    @Column(name = "imageurl")
    private String imageUrl;
    @Column(name = "status")
    private String status;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "shoe_model_modelid") // ensure this is the correct column name for the foreign key
    private ShoeModel shoeModel;

    @OneToMany(mappedBy = "shoe")
    @JsonIgnore
    private Set<OrderItem> orderItems;
//    @OneToOne()
//    private CartItem cartItem;

    @OneToMany(mappedBy = "shoe",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<ImageShoe> imageShoes = new HashSet<>();


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
