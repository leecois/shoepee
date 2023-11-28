package com.ToDoiVar.ShoesPee.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orderitems")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderItemId;
    @ManyToOne
    @JsonIgnore
    private CustomizedShoe customizedShoe;
    private int size;

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
