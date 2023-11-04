package com.ToDoiVar.ShoesPee.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
@Entity
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartItemId;
    private int quantity;
    private double totalprice;
    //Relationship with other table

    @ManyToOne
    private Cart cart;
    @OneToOne
    @JoinColumn(name = "shoe_shoeid")
    @JsonIgnore
    private Shoe shoe;
    public int getCartItemId() {
        return cartItemId;
    }
    public void setCartItemId(int cartItemId) {
        this.cartItemId = cartItemId;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public double getTotalprice() {
        return totalprice;
    }
    public void setTotalprice(double totalprice) {
        this.totalprice = totalprice;
    }
    public Cart getCart() {
        return cart;
    }
    public void setCart(Cart cart) {
        this.cart = cart;
    }
    public Shoe getShoe() {
        return shoe;
    }
    public void setShoe(Shoe product) {
        this.shoe = product;
    }


}