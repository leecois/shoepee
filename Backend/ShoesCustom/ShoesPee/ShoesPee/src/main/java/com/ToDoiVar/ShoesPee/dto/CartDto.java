package com.ToDoiVar.ShoesPee.dto;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CartDto {
    private int cartId;
    private	Set<CartItemDto> items= new HashSet<>();
    private UserDto user;
    private double totalPrice;

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
    public int getCartId() {
        return cartId;
    }
    public void setCartId(int cartId) {
        this.cartId = cartId;
    }
    public Set<CartItemDto> getItems() {
        return items;
    }
    public void setItems(Set<CartItemDto> items) {
        this.items = items;
    }
    public UserDto getUser() {
        return user;
    }
    public void setUser(UserDto user) {
        this.user = user;
    }
}
