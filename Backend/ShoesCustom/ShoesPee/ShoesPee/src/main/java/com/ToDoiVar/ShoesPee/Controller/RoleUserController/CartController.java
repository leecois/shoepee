package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Exeption.AuthenticationFailException;
import com.ToDoiVar.ShoesPee.Exeption.CartItemNotExistException;
import com.ToDoiVar.ShoesPee.Exeption.shoeNotFoundException;
import com.ToDoiVar.ShoesPee.Models.ItemRequest;
import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.Security.config.JwtService;
import com.ToDoiVar.ShoesPee.Services.CartService;
import com.ToDoiVar.ShoesPee.Services.ShoeService;
import com.ToDoiVar.ShoesPee.Services.UserService;
import com.ToDoiVar.ShoesPee.dto.AddToCartDto;
import com.ToDoiVar.ShoesPee.dto.CartDto;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;
import com.ToDoiVar.ShoesPee.payload.response.ApiResponse;
import jakarta.validation.Valid;
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
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserService userService;
    @Autowired
    private ShoeService shoeService;


    @PostMapping("/addcart")
    public ResponseEntity<CartDto> addtoCart(@RequestBody ItemRequest itemRequest,@RequestHeader("Authorization") String bearertoken){

//        String email=principal.getName();
//        System.out.println(email);
        String token = bearertoken.substring(7);
       String username =  jwtService.extractUsername(token);
        CartDto addItem = this.cartService.addItem(itemRequest,username);

        return new ResponseEntity<CartDto>(addItem,HttpStatus.OK);
    }


    //create method for getting cart
    @GetMapping("/getcart")
    public ResponseEntity<CartDto>getAllCart(@RequestHeader("Authorization") String bearertoken){

        String token = bearertoken.substring(7);
        String username =  jwtService.extractUsername(token);
        CartDto getcartAll = this.cartService.getcartAll(username);
        return new ResponseEntity<CartDto>(getcartAll,HttpStatus.ACCEPTED);
    }
    @GetMapping("/{cartId}")
    public ResponseEntity<CartDto>getCartById(@PathVariable  int cartId){

        System.out.println(cartId);
        CartDto cartByID = this.cartService.getCartByID(cartId);
        return new ResponseEntity<CartDto>(cartByID,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<CartDto>deleteCartItemFromCart(@PathVariable int pid,Principal p){

        CartDto remove = this.cartService.removeCartItemFromCart(p.getName(),pid);
        return new ResponseEntity<CartDto>(remove,HttpStatus.UPGRADE_REQUIRED);
    }

}
