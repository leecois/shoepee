package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "orderitems")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderItemId;
    @ManyToOne
    @JsonIgnore
    private CustomizedShoe customizedShoe;

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
    public OrderItem(int orderItemId, CustomizedShoe customizedShoe, double totalProductprice, int productQuantity, Order order) {
        super();
        this.orderItemId = orderItemId;
        this.customizedShoe = customizedShoe;
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
    public CustomizedShoe getShoe() {
        return customizedShoe;
    }
    public void setShoe(CustomizedShoe product) {
        this.customizedShoe = product;
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
