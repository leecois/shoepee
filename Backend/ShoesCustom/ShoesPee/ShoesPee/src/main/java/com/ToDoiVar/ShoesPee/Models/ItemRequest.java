package com.ToDoiVar.ShoesPee.Models;

public class ItemRequest {
    private int shoeId;
    private int quantity;
    public int getShoeId() {
        return shoeId;
    }
    public void setShoeId(int shoeId) {
        this.shoeId = shoeId;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public ItemRequest(int shoeId, int quantity) {
        super();
        this.shoeId = shoeId;
        this.quantity = quantity;
    }
    public ItemRequest() {
        super();
        // TODO Auto-generated constructor stub
    }

}
