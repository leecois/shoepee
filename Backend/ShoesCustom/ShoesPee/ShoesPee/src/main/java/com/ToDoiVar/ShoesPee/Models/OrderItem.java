package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "orderitems")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderItemId;
    @OneToOne
    private Shoe shoe;

    private double totalProductprice;

    private int productQuantity;
    @ManyToOne
    private Order order;



    public int getProductQuantity() {
        return productQuantity;
    }
    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }
    public OrderItem(int orderItemId, Shoe shoe, double totalProductprice, int productQuantity, Order order) {
        super();
        this.orderItemId = orderItemId;
        this.shoe = shoe;
        this.totalProductprice = totalProductprice;
        this.productQuantity = productQuantity;
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
    public void setShoe(Shoe product) {
        this.shoe = product;
    }
    public double getTotalProductprice() {
        return totalProductprice;
    }
    public void setTotalProductprice(double totalProductprice) {
        this.totalProductprice = totalProductprice;
    }
    public Order getOrder() {
        return order;
    }
    public void setOrder(Order order) {
        this.order = order;
    }

}
