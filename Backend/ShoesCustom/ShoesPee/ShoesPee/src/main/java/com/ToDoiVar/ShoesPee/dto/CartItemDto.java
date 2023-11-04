package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public class CartItemDto {
    private int cartItemId;
    private int quantity;
    private double totalprice;
    @JsonIgnore
    private CartDto cart;

    private Shoe shoeDto;
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

    public CartDto getCart() {
        return cart;
    }
    public void setCart(CartDto cart) {
        this.cart = cart;
    }
    public Shoe getShoeDto() {
        return shoeDto;
    }
    public void setShoeDto(Shoe shoeDto) {
        this.shoeDto = shoeDto;
    }



}
