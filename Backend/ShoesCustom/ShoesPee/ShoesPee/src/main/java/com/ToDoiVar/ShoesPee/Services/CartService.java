package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.ResourceNotFoundException;
import com.ToDoiVar.ShoesPee.Models.*;
import com.ToDoiVar.ShoesPee.dto.CartDto;
import com.ToDoiVar.ShoesPee.repositiory.CartRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeRepository;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
@Service
public class CartService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShoeRepository shoeRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ModelMapper modelMapper;

    public CartDto addItem(ItemRequest item, String username){
        int shoeId=item.getShoeId();
        int quantity=item.getQuantity();
        //fetch user
        User user = this.userRepository.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("User not found"));
        //fetch Product
        Shoe shoe=this.shoeRepository.findById(shoeId).orElseThrow(()->new ResourceNotFoundException("Shoe Not Found"));



        CartItem cartItem=new CartItem();
        cartItem.setShoe(shoe);
        cartItem.setQuantity(quantity);
        double totaleprice=shoe.getPrice()*quantity;
        cartItem.setTotalprice(totaleprice);

        //getting cart from user
        Cart cart=user.getCart();

        if(cart==null) {
            cart=new Cart();
            //
            cart.setUser(user);
        }

        cartItem.setCart(cart);

        Set<CartItem> items = cart.getItems();

        AtomicReference<Boolean> flag=new AtomicReference<>(false);

        Set<CartItem> newshoe = items.stream().map((i)->{
            if(i.getShoe().getId()==shoe.getId()) {
                i.setQuantity(quantity);
                i.setTotalprice(totaleprice);
                flag.set(true);
            }
            return i;

        }).collect(Collectors.toSet());

        if(flag.get()){
            items.clear();
            items.addAll(newshoe);

        }else {
            cartItem.setCart(cart);
            items.add(cartItem);
        }

        Cart saveCart = this.cartRepository.save(cart);



        return  this.modelMapper.map(saveCart,CartDto.class);
    }


    public CartDto getcartAll(String email){
        //find user
        User user = this.userRepository.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User Not Found"));
        //find cart
        Cart cart= this.cartRepository.findByUser(user).orElseThrow(()->new ResourceNotFoundException("There is no cart"));

        return this.modelMapper.map(cart,CartDto.class);

    }

    // get cart by CartId


    public CartDto getCartByID(int cartId){

        //User user=this.userRepo.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("User Not found"));

        Cart findByUserAndcartId = this.cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFoundException("Cart not Found"));

        return this.modelMapper.map(findByUserAndcartId,CartDto.class);
    }

    public CartDto removeCartItemFromCart(String userName, int ShoeId){
        User user=this.userRepository.findByEmail(userName).orElseThrow(()->new ResourceNotFoundException("User Not found"));

        Cart cart=user.getCart();
        Set<CartItem> items = cart.getItems();

        boolean removeIf = items.removeIf((i)->i.getShoe().getId()==ShoeId);
        Cart save = this.cartRepository.save(cart);
        System.out.println(removeIf);
        return this.modelMapper.map(save,CartDto.class);
    }
}
