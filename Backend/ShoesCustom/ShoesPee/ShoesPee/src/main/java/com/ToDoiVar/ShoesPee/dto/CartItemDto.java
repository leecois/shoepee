    package com.ToDoiVar.ShoesPee.dto;

    import com.fasterxml.jackson.annotation.JsonIgnore;

    public class CartItemDto {
        private int cartItemId;
        private int quantity;
        private double totalprice;
        @JsonIgnore
        private CartDto cart;
        private ShoeDto shoe;
        public int getCartItemId() {
            return cartItemId;
        }
        public void setCartItemId(int cartItemId) {
            this.cartItemId = cartItemId;
        }
        public int getQuantity() {
            return quantity;
        }
        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }
        public double getTotalprice() {
            return totalprice;
        }
        public void setTotalprice(double totalprice) {
            this.totalprice = totalprice;
        }

        public CartDto getCart() {
            return cart;
        }
        public void setCart(CartDto cart) {
            this.cart = cart;
        }
        public ShoeDto getShoe() {
            return shoe;
        }
        public void setShoe(ShoeDto shoe) {
            this.shoe = shoe;
        }


    }
