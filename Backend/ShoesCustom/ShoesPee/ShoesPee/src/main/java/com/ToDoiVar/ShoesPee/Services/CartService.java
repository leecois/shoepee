package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.ResourceNotFoundException;
import com.ToDoiVar.ShoesPee.Models.*;
import com.ToDoiVar.ShoesPee.dto.CartDto;
import com.ToDoiVar.ShoesPee.dto.CartItemDto;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import com.ToDoiVar.ShoesPee.repositiory.CartRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeRepository;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class CartService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private ShoeRepository shoeRepository;

    @Autowired
    private CartRepository cartRepo;
    @Autowired
    private ModelMapper modelMapper;

    public CartDto addItem(ItemRequest item,String username){
        int productId = item.getShoeId();
        int quantity = item.getQuantity();

        // Fetch user
        User user = this.userRepo.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Fetch Product
        Shoe shoe = this.shoeRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product Not Found"));

        // Check product stock here (not implemented in the given code)

        // Create cartItem with productId and quantity
        CartItem cartItem = new CartItem();
        cartItem.setShoe(shoe);
        cartItem.setQuantity(quantity);
        double totalprice = shoe.getPrice() * quantity;
        cartItem.setTotalprice(totalprice);

        // Get cart from user
        Cart cart = user.getCart();
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
        }

        // Check if item is available in CartItem or not
        AtomicReference<Boolean> flag = new AtomicReference<>(false);
        cart.getItems().forEach(i -> {
            if (i.getShoe().getId() == shoe.getId()) {
                i.setQuantity(i.getQuantity() + quantity);
                i.setTotalprice(i.getTotalprice() + totalprice);
                flag.set(true);
            }
        });

        if (!flag.get()) {
            cartItem.setCart(cart);
            cart.getItems().add(cartItem);
        }
        double cartTotalPrice = cart.getItems().stream()
                .mapToDouble(CartItem::getTotalprice)
                .sum();
        cartItem.setSize(item.getSize());

        // Save the cart
        Cart savedCart = this.cartRepo.save(cart);

        // Map the Cart to CartDto
        CartDto cartDto = this.modelMapper.map(savedCart, CartDto.class);

        Set<CartItemDto> cartItemDtos = savedCart.getItems().stream()
                .map(ci -> {
                    // First, map the CartItem to CartItemDto
                    CartItemDto cartItemDto = this.modelMapper.map(ci, CartItemDto.class);
                    // Then map the ShoeModel to ShoeModelDto
                    ShoeModelDto shoeModelDto = this.modelMapper.map(ci.getShoe().getShoeModel(), ShoeModelDto.class);
                    // Set the ShoeModelDto to the ShoeDto within the CartItemDto
                    cartItemDto.getShoe().setShoeModelDto(shoeModelDto);
                    return cartItemDto;
                })
                .collect(Collectors.toSet());

        // Set the CartItemDtos to the CartDto
        cartDto.setItems(cartItemDtos);

        // Return the CartDto
        return cartDto;
    }
    public CartDto addItemWithShoemodel(ItemRequest item,String username){
        int productId = item.getShoeId();
        int quantity = item.getQuantity();

        // Fetch user
        User user = this.userRepo.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Fetch Product
        Shoe shoe = this.shoeRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product Not Found"));

        // Check product stock here (not implemented in the given code)

        // Create cartItem with productId and quantity
        CartItem cartItem = new CartItem();
        cartItem.setShoe(shoe);
        cartItem.setQuantity(quantity);
        double totalprice = shoe.getPrice() * quantity + shoe.getShoeModel().getPrice();
        cartItem.setTotalprice(totalprice);

        // Get cart from user
        Cart cart = user.getCart();
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
        }

        // Check if item is available in CartItem or not
        AtomicReference<Boolean> flag = new AtomicReference<>(false);
        cart.getItems().forEach(i -> {
            if (i.getShoe().getId() == shoe.getId()) {
                i.setQuantity(i.getQuantity() + quantity);
                i.setTotalprice(i.getTotalprice() + totalprice);
                flag.set(true);
            }
        });

        if (!flag.get()) {
            cartItem.setCart(cart);
            cart.getItems().add(cartItem);
        }

        cartItem.setSize(item.getSize());
        double cartTotalPrice = cart.getItems().stream()
                .mapToDouble(CartItem::getTotalprice)
                .sum();
        cart.setTotalPrice(cartTotalPrice);
        // Save the cart
        Cart savedCart = this.cartRepo.save(cart);

        // Map the Cart to CartDto
        CartDto cartDto = this.modelMapper.map(savedCart, CartDto.class);
        cartDto.setTotalPrice(cartTotalPrice);
        Set<CartItemDto> cartItemDtos = savedCart.getItems().stream()
                .map(ci -> {
                    // First, map the CartItem to CartItemDto
                    CartItemDto cartItemDto = this.modelMapper.map(ci, CartItemDto.class);
                    // Then map the ShoeModel to ShoeModelDto
                    ShoeModelDto shoeModelDto = this.modelMapper.map(ci.getShoe().getShoeModel(), ShoeModelDto.class);
                    // Set the ShoeModelDto to the ShoeDto within the CartItemDto
                    cartItemDto.getShoe().setShoeModelDto(shoeModelDto);
                    return cartItemDto;
                })
                .collect(Collectors.toSet());

        // Set the CartItemDtos to the CartDto
        cartDto.setItems(cartItemDtos);

        // Return the CartDto
        return cartDto;
    }

    public CartDto getcartAll(String email){
        //find user
        User user = this.userRepo.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User Not Found"));
        //find cart
        Cart cart= this.cartRepo.findByUser(user).orElseThrow(()->new ResourceNotFoundException("There is no cart"));
        CartDto cartDto = this.modelMapper.map(cart, CartDto.class);

        Set<CartItemDto> cartItemDtos = cart.getItems().stream()
                .map(ci -> {
                    // First, map the CartItem to CartItemDto
                    CartItemDto cartItemDto = this.modelMapper.map(ci, CartItemDto.class);
                    // Then map the ShoeModel to ShoeModelDto
                    ShoeModelDto shoeModelDto = this.modelMapper.map(ci.getShoe().getShoeModel(), ShoeModelDto.class);
                    // Set the ShoeModelDto to the ShoeDto within the CartItemDto
                    cartItemDto.getShoe().setShoeModelDto(shoeModelDto);
                    return cartItemDto;
                })
                .collect(Collectors.toSet());

        // Set the CartItemDtos to the CartDto
        cartDto.setItems(cartItemDtos);

        // Return the CartDto
        return cartDto;

    }

    // get cart by CartId


    public CartDto getCartByID(int cartId){

        //User user=this.userRepo.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("User Not found"));

        Cart findByUserAndcartId = this.cartRepo.findById(cartId).orElseThrow(()->new ResourceNotFoundException("Cart not Found"));

        return this.modelMapper.map(findByUserAndcartId,CartDto.class);
    }

    public CartDto removeCartItemFromCart(String userName, int ProductId){
        User user=this.userRepo.findByEmail(userName).orElseThrow(()->new ResourceNotFoundException("User Not found"));

        Cart cart=user.getCart();
        Set<CartItem> items = cart.getItems();

        boolean removeIf = items.removeIf((i)->i.getShoe().getId()==ProductId);
        Cart save = this.cartRepo.save(cart);
        System.out.println(removeIf);
        return this.modelMapper.map(save,CartDto.class);
    }

}
