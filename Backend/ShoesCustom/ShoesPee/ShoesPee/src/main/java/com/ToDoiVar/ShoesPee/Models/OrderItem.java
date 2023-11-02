package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.*;

@Entity
public class OrderItem {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderItemId;
    @OneToOne
    private Shoe shoe;

    private double totalShoeprice;

    private int shoeQuantity;
    @ManyToOne
    private Order order;



    public int getShoeQuantity() {
        return shoeQuantity;
    }
    public void setShoeQuantity(int shoeQuantity) {
        this.shoeQuantity = shoeQuantity;
    }
    public OrderItem(int orderItemId, Shoe shoe, double totalShoeprice, int shoeQuantity, Order order) {
        super();
        this.orderItemId = orderItemId;
        this.shoe = shoe;
        this.totalShoeprice = totalShoeprice;
        this.shoeQuantity = shoeQuantity;
        this.order = order;
    }
    public OrderItem() {
        super();
        // TODO Auto-generated constructor stub
    }
    public int getOrderItemId() {
        return orderItemId;
    }
    public void setOrderItemId(int orderItemId) {
        this.orderItemId = orderItemId;
    }
    public Shoe getShoe() {
        return shoe;
    }
    public void setShoe(Shoe shoe) {
        this.shoe = shoe;
    }
    public double getTotalShoeprice() {
        return totalShoeprice;
    }
    public void setTotalShoeprice(double totalShoeprice) {
        this.totalShoeprice = totalShoeprice;
    }
    public Order getOrder() {
        return order;
    }
    public void setOrder(Order order) {
        this.order = order;
    }



}
