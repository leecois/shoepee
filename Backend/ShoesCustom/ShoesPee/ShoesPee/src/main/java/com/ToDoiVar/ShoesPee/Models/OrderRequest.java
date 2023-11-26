package com.ToDoiVar.ShoesPee.Models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderRequest {
    private String customerName;
    private String orderAddress;
    private String orderPhone;
    private String paymentMethod;
    private int cartId;
    public String getOrderAddress() {
        return orderAddress;
    }
    public void setOrderAddress(String orderAddress) {
        this.orderAddress = orderAddress;
    }
    public int getCartId() {
        return cartId;
    }
    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

}
