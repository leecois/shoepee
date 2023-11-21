package com.ToDoiVar.ShoesPee.Models;

import com.ToDoiVar.ShoesPee.dto.CustomizedShoeDto;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "tblcustomizedshoe")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class CustomizedShoe {
    @Id
    @Column(name = "shoeid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private double price;
    @Column(name = "description")
    private String description;
    @Column(name = "imageurl")
    private String imageUrl;
    @Column(name = "status")
    private String status;
    @Column(name = "stock")
    private boolean stock;
    @Column(name = "shoequantity")
    private int shoeQuantity;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "shoe_model_modelid") // ensure this is the correct column name for the foreign key
    private ShoeModel shoeModel;

    @OneToMany(mappedBy = "customizedShoe")
    @JsonIgnore
    private Set<OrderItem> orderItems;
//    @OneToOne()
//    private CartItem cartItem;

//    @OneToMany(mappedBy = "shoe",cascade = CascadeType.ALL)
//    @JsonIgnore
//    private Set<ImageShoe> imageShoes = new HashSet<>();


//@JsonIgnore
//@OneToMany(fetch = FetchType.LAZY, mappedBy = "shoe")
//private List<Cart> carts;
    public CustomizedShoe(CustomizedShoeDto customizedShoeDto, ShoeModel shoeModel){
        this.price = customizedShoeDto.getPrice();
        this.description = customizedShoeDto.getDescription();
        this.imageUrl = customizedShoeDto.getImageUrl();
        this.shoeModel = shoeModel;
    }
}
