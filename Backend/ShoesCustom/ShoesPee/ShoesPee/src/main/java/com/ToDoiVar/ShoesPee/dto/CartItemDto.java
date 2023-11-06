    package com.ToDoiVar.ShoesPee.dto;

    import com.ToDoiVar.ShoesPee.Models.Cart;
    import com.ToDoiVar.ShoesPee.Models.Shoe;
    import lombok.Data;

    public class CartItemDto {
    private Integer id;
    private Integer quantity;
    private Shoe shoe;

    public CartItemDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Shoe getShoe() {
        return shoe;
    }

    public void setShoe(Shoe shoe) {
        this.shoe = shoe;
    }

    public CartItemDto(Cart cart) {
        this.id = cart.getId();
        this.quantity = cart.getQuantity();
        this.setShoe(cart.getShoe());
    }


    }
