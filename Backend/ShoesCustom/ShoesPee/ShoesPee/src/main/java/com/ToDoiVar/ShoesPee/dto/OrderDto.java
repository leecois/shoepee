package com.ToDoiVar.ShoesPee.dto;

import com.ToDoiVar.ShoesPee.Models.Order;
import com.ToDoiVar.ShoesPee.Models.OrderItem;
import com.ToDoiVar.ShoesPee.Models.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class OrderDto {

    private Integer id;
    private @NotNull Integer userId;

    public OrderDto() {
    }

    public OrderDto(Order order) {
        this.setId(order.getId());
        //this.setUserId(order.getUserId());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

}