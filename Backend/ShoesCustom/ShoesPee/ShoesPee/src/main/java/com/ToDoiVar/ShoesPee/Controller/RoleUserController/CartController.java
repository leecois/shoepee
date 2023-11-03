package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.ItemRequest;
import com.ToDoiVar.ShoesPee.Services.CartService;
import com.ToDoiVar.ShoesPee.dto.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/auth")
//@PreAuthorize("hasRole('USER')")
public class CartController {

    @Autowired
    private CartService cartService;

        @PostMapping("/addcart")
    public ResponseEntity<CartDto> addtoCart(@RequestBody ItemRequest itemRequest, Principal principal){
        if (principal == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // Hoặc mã lỗi tùy chọn
        }
        String email=principal.getName();
        System.out.println(email);
        CartDto addItem = this.cartService.addItem(itemRequest,principal.getName());

        return new ResponseEntity<CartDto>(addItem, HttpStatus.OK);
    }


    //create method for getting cart
    @GetMapping("/cart")
    public ResponseEntity<CartDto>getAllCart(Principal principal){
        if (principal != null) {
            CartDto getcartAll = this.cartService.getcartAll(principal.getName());
            return new ResponseEntity<CartDto>(getcartAll, HttpStatus.ACCEPTED);
        } else {
            String errorMessage = "Can't take information user";
            return new ResponseEntity<>(new CartDto(errorMessage), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/cart/{cartId}")
    public ResponseEntity<CartDto>getCartById(@PathVariable  int cartId){

        System.out.println(cartId);
        CartDto cartByID = this.cartService.getCartByID(cartId);
        return new ResponseEntity<CartDto>(cartByID,HttpStatus.OK);
    }

    @DeleteMapping("/cart/{pid}")
    public ResponseEntity<CartDto>deleteCartItemFromCart(@PathVariable int pid,Principal p){

        CartDto remove = this.cartService.removeCartItemFromCart(p.getName(),pid);
        return new ResponseEntity<CartDto>(remove,HttpStatus.UPGRADE_REQUIRED);
    }

}
