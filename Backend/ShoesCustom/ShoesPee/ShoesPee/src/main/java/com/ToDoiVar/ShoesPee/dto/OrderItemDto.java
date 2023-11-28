package com.ToDoiVar.ShoesPee.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDto {

    private int orderItemId;

    private CustomizedShoeDto customizedShoeDto;
    private int productQuantity;
    private int size;
    private double totalProductprice;
    @JsonIgnore
    private OrderDto order;

    public CustomizedShoeDto getCustomizedShoeDto() {
        return customizedShoeDto;
    }

    public void setCustomizedShoeDto(CustomizedShoeDto customizedShoeDto) {
        this.customizedShoeDto = customizedShoeDto;
    }

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

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
