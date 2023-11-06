package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "created_date")
    private Date createdDate;

    @ManyToOne
//    @JoinColumn(name = "product_id")
    private Shoe shoe;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private int quantity;

    @OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<CartItem> items= new HashSet<>();

    public Set<CartItem> getItems() {
        return items;
    }

    public void setItems(Set<CartItem> items) {
        this.items = items;
    }

    public Cart() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Shoe getShoe() {
        return shoe;
    }

    public void setShoe(Shoe product) {
        this.shoe = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public void addItem(CartItem cartItem) {
        if (items == null) {
            items = new HashSet<>();
        }
        items.add(cartItem);
    }
}
