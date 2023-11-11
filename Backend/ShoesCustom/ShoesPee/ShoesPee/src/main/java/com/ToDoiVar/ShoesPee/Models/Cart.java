package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "cart")
public class Cart {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //Relationship with other table

    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<CartItem> items= new HashSet<>();
    @OneToOne
    private User user;
    private double totalPrice;

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
    public int getId() {
        return id;
    }
    public void setId(int cartId) {
        this.id = cartId;
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
