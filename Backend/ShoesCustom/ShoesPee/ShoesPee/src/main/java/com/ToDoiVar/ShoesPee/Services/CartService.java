package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.*;
import com.ToDoiVar.ShoesPee.dto.AddToCartDto;
import com.ToDoiVar.ShoesPee.dto.CartDto;
import com.ToDoiVar.ShoesPee.dto.CartItemDto;
import com.ToDoiVar.ShoesPee.repositiory.CartRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeRepository;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CartService {
    @Autowired
    ShoeService shoeService;
    @Autowired
    ModelMapper mapper;
    @Autowired
    CartRepository cartRepository;
    @Autowired
    UserRepository userRepo;
    @Autowired
    ShoeRepository shoeRepository;
//    public CartDto addItem(ItemRequest item,String username){
//        int productId=item.getShoeId();
//        int quantity=item.getQuantity();
//        //fetch user
//        User user = this.userRepo.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("User not found"));
//        //fetch Product
//        Shoe product=this.shoeRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product Not Found"));
//
//        //here we are checking product stock
////        if(!product.isStock()){
////
////            new ResourceNotFoundException("Product Out of Stock");
////        }
//
//        // create cartItem with productId and Qnt
//
//        CartItem cartItem=new CartItem();
//        cartItem.setShoe(product);
//        cartItem.setQuantity(quantity);
//        double totaleprice=product.getPrice()*quantity;
//        cartItem.setTotalprice(totaleprice);
//
//        //getting cart from user
//        Cart cart=user.getCart();
//
//        if(cart==null) {
//            cart=new Cart();
//            //
//            cart.setUser(user);
//        }
//
//        cartItem.setCart(cart);
//
//        Set<CartItem> items = cart.getItems();
//
//        // here we check item is available in CartItem or not
//        // if CartItem is availabe then we inc Qnt only else
//        // add new product in cartItem
//        //
//        // by default false
//        AtomicReference<Boolean> flag=new AtomicReference<>(false);
//
//        Set<CartItem> newproduct = items.stream().map((i)->{
//            if(i.getShoe().getId()==product.getId()) {
//                i.setQuantity(quantity);
//                i.setTotalprice(totaleprice);
//                flag.set(true);
//            }
//            return i;
//
//        }).collect(Collectors.toSet());
//
//        if(flag.get()){
//            items.clear();
//            items.addAll(newproduct);
//
//        }else {
//            cartItem.setCart(cart);
//            items.add(cartItem);
//        }
//
//        Cart saveCart = this.cartRepository.save(cart);
//
//
//
//        return  this.mapper.map(saveCart,CartDto.class);
//    }
public void addToCart(AddToCartDto addToCartDto,  User user){
    Shoe shoe = shoeService.findById(addToCartDto.getProductId());

    Cart cart = new Cart();
    cart.setShoe(shoe);
    cart.setUser(user);
    cart.setQuantity(addToCartDto.getQuantity());
    cart.setCreatedDate(new Date());

    CartItem cartItem = new CartItem();
    cartItem.setShoe(shoe);
    cartItem.setQuantity(addToCartDto.getQuantity());
    double totalPrice = shoe.getPrice() * addToCartDto.getQuantity();
    cartItem.setTotalprice(totalPrice);
    cartItem.setCart(cart);
//    // add cart item to cart
    cart.addItem(cartItem);
//    // save the cart
    cartRepository.save(cart);
}
//public void addToCart(AddToCartDto addToCartDto, Shoe shoe, User user){
//    // validate if the product id is valid
//    Shoe product = shoeService.findById(addToCartDto.getProductId());
//
//    Cart cart = new Cart();
//    cart.se(product);
//    cart.setUser(user);
//    cart.setQuantity(addToCartDto.getQuantity());
//    cart.setCreatedDate(new Date());
//
//
//    // save the cart
//    cartRepository.save(cart);
//}
    public CartDto listCartItems(User user) {
        List<Cart> cartList = cartRepository.findAllByUserOrderByCreatedDateDesc(user);

        List<CartItemDto> cartItems = new ArrayList<>();
        double totalCost = 0;
        for (Cart cart: cartList) {
            CartItemDto cartItemDto = new CartItemDto(cart);
            totalCost += cartItemDto.getQuantity() * cart.getShoe().getPrice();
            cartItems.add(cartItemDto);
        }

        CartDto cartDto = new CartDto();
        cartDto.setTotalCost(totalCost);
        cartDto.setCartItems(cartItems);
        return  cartDto;
    }

    public void deleteCartItem(Integer cartItemId, User user) {
        // the item id belongs to user

        Optional<Cart> optionalCart = cartRepository.findById(cartItemId);

        if (optionalCart.isEmpty()) {
            throw new CustomException("cart item id is invalid: " + cartItemId);
        }

        Cart cart = optionalCart.get();

        if (cart.getUser() != user) {
            throw  new CustomException("cart item does not belong to user: " +cartItemId);
        }

        cartRepository.delete(cart);


    }
    public void deleteCartItems(int userId) {
        cartRepository.deleteAll();
    }


    public void deleteUserCartItems(User user) {
        cartRepository.deleteByUser(user);
    }
}
