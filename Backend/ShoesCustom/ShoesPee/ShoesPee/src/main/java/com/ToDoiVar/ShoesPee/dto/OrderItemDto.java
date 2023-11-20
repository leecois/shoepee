package com.ToDoiVar.ShoesPee.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class OrderItemDto {

    private int orderItemId;

    private CustomizedShoeDto customizedShoeDto;

    private double totalProductprice;
    @JsonIgnore
    private OrderDto order;

    public int getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(int orderItemId) {
        this.orderItemId = orderItemId;
    }

    public CustomizedShoeDto getShoeDto() {
        return customizedShoeDto;
    }

    public void setShoeDto(CustomizedShoeDto customizedShoeDto) {
        this.customizedShoeDto = customizedShoeDto;
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
