package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class OrderItemDto {

    private int orderItemId;

    private ShoeDto shoe;

    private double totalProductprice;
    @JsonIgnore
    private OrderDto order;

    public int getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(int orderItemId) {
        this.orderItemId = orderItemId;
    }

    public ShoeDto getShoe() {
        return shoe;
    }

    public void setShoe(ShoeDto shoe) {
        this.shoe = shoe;
    }

    public double getTotalProductprice() {
        return totalProductprice;
    }

    public void setTotalProductprice(double totalProductprice) {
        this.totalProductprice = totalProductprice;
    }

    public OrderDto getOrder() {
        return order;
    }

    public void setOrder(OrderDto order) {
        this.order = order;
    }

}
