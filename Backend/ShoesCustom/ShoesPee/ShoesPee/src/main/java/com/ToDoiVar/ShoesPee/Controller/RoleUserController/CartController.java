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


        @PostMapping("/add")
        public ResponseEntity<ApiResponse> addToCart(@RequestBody AddToCartDto addToCartDto,
                @RequestParam("token") String token) throws AuthenticationFailException, shoeNotFoundException {
            String nameUser = jwtService.extractUsername(token);
            User user = userService.getUserByEmail(nameUser);
            Shoe product = shoeService.findById(addToCartDto.getProductId());
            cartService.addToCart(addToCartDto, product, user);
            return new ResponseEntity<ApiResponse>(new ApiResponse("Added to cart", true), HttpStatus.CREATED);

        }
        @GetMapping("/getcartitem")
        public ResponseEntity<CartDto> getCartItems(@RequestParam("token") String token) throws AuthenticationFailException {
            String nameUser = jwtService.extractUsername(token);
            User user = userService.getUserByEmail(nameUser);
            CartDto cartDto = cartService.listCartItems(user);
            return new ResponseEntity<CartDto>(cartDto,HttpStatus.OK);
        }
        @PutMapping("/update/{cartItemId}")
        public ResponseEntity<ApiResponse> updateCartItem(@RequestBody @Valid AddToCartDto cartDto,
                @RequestParam("token") String token) throws AuthenticationFailException, shoeNotFoundException {
            String nameUser = jwtService.extractUsername(token);
            User user = userService.getUserByEmail(nameUser);
            Shoe product = shoeService.findById(cartDto.getProductId());
            cartService.updateCartItem(cartDto, user,product);
            return new ResponseEntity<ApiResponse>(new ApiResponse("Product has been updated", true), HttpStatus.OK);
        }

        @DeleteMapping("/delete/{cartItemId}")
        public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable("cartItemId") int itemID,@RequestParam("token") String token) throws AuthenticationFailException, CartItemNotExistException {
            String nameUser = jwtService.extractUsername(token);
            User user = userService.getUserByEmail(nameUser);
//            int userId = userService.getUser(token).getId();
            cartService.deleteCartItem(itemID, user.getUserId());
            return new ResponseEntity<ApiResponse>(new ApiResponse("Item has been removed", true), HttpStatus.OK);
        }
}
