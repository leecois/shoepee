package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Cart {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartId;

//Relationship with other table

    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<CartItem> items= new HashSet<>();
    @OneToOne
    private User user;
    public int getCartId() {
        return cartId;
    }
    public void setCartId(int cartId) {
        this.cartId = cartId;
    }
    public Set<CartItem> getItems() {
        return items;
    }
    public void setItems(Set<CartItem> items) {
        this.items = items;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }







}
