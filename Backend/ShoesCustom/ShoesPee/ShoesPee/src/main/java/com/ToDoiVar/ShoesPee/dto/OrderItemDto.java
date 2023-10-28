package com.ToDoiVar.ShoesPee.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class OrderItemDto {

    private int orderItemId;

    private ShoeDto shoe;

    private double totalShoeprice;
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

    public double getTotalShoeprice() {
        return totalShoeprice;
    }

    public void setTotalShoeprice(double totalShoeprice) {
        this.totalShoeprice = totalShoeprice;
    }

    public OrderDto getOrder() {
        return order;
    }

    public void setOrder(OrderDto order) {
        this.order = order;
    }

}
