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
    private int size;
    //Relationship with other table
    @ManyToOne
    @JsonIgnore
    private Cart cart;
    @ManyToOne
    @JoinColumn(name = "shoeid")
    private CustomizedShoe customizedShoe;
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
    public CustomizedShoe getShoe() {
        return customizedShoe;
    }
    public void setShoe(CustomizedShoe product) {
        this.customizedShoe = product;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}