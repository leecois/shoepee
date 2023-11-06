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
    public ResponseEntity<ApiResponse> addtoCart(@RequestBody AddToCartDto addToCartDto,Principal principal){
        String email=principal.getName();
        User user = userService.getUserByEmail(email);
        Shoe shoe = shoeService.findById(addToCartDto.getProductId());
        this.cartService.addToCart(addToCartDto,user);

        return new ResponseEntity<ApiResponse>(new ApiResponse("Added to cart", true), HttpStatus.CREATED);
    }


    //create method for getting cart
    @GetMapping("/getcart")
    public ResponseEntity<CartDto>getAllCart(Principal principal){
        String email=principal.getName();
        User user = userService.getUserByEmail(email);
        CartDto getcartAll = this.cartService.listCartItems(user);
        return new ResponseEntity<>(getcartAll,HttpStatus.OK);
    }
//    @GetMapping("/{cartId}")
//    public ResponseEntity<CartDto>getCartById(@PathVariable  int cartId){
//
//        System.out.println(cartId);
//        CartDto cartByID = this.cartService.getCartByID(cartId);
//        return new ResponseEntity<CartDto>(cartByID,HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<ApiResponse>deleteCartItem(@PathVariable int pid,Principal p){
        String email=p.getName();
        User user = userService.getUserByEmail(email);
        this.cartService.deleteCartItem(pid,user);
        return new ResponseEntity<>(new ApiResponse("Item has been removed", true), HttpStatus.OK);
    }
    @GetMapping("/getcartitem")
    public ResponseEntity<CartDto> getCartItems(Principal principal) throws AuthenticationFailException {
        String email=principal.getName();
        User user = userService.getUserByEmail(email);
        CartDto cartDto = cartService.listCartItems(user);
        return new ResponseEntity<CartDto>(cartDto,HttpStatus.OK);
    }

}
