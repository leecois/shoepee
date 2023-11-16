package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.ResourceNotFoundException;
import com.ToDoiVar.ShoesPee.Models.*;
import com.ToDoiVar.ShoesPee.dto.*;
import com.ToDoiVar.ShoesPee.repositiory.CartRepository;
import com.ToDoiVar.ShoesPee.repositiory.OrderItemsRepository;
import com.ToDoiVar.ShoesPee.repositiory.OrderRepository;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
@Service
public class OrderService {
    @Autowired
    private	UserRepository userRepo;
    @Autowired
    private CartRepository cartRepo;
    @Autowired
    private  ModelMapper modelMapper;

    @Autowired
    private OrderRepository orderReop;

    //order Create method

    public OrderDto orderCreate(OrderRequest request,String username) {

        User user = this.userRepo.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("User not found"));

        int cartId=request.getCartId();
        String orderAddress=request.getOrderAddress();
        String orderPhoneNumber = request.getOrderPhone();
        String orderFullName = request.getCustomerName();
        //find cart
        Cart cart= this.cartRepo.findById(cartId).orElseThrow(()->new ResourceNotFoundException("Cart Not Found"));
        //getting CartItem
        Set<CartItem> items  = cart.getItems();
        Order order=new Order();

        AtomicReference<Double> totalOrderPrice= new AtomicReference<Double>(0.0);
        Set<OrderItem>	orderitems=items.stream().map((cartItem)-> {
            OrderItem orderItem=new OrderItem();
            //set cartItem into OrderItem

            //set product in orderItem
            orderItem.setShoe(cartItem.getShoe());

            //set productQty in orderItem

            orderItem.setProductQuantity(cartItem.getQuantity());

            orderItem.setTotalProductprice(cartItem.getTotalprice());
            orderItem.setOrder(order);

            totalOrderPrice.set(totalOrderPrice.get()+ orderItem.getTotalProductprice());
            int productId=orderItem.getShoe().getId();

            return orderItem;
        }).collect(Collectors.toSet());

        order.setBillingAddress(orderAddress);
        order.setStatus(false);
        order.setFullName(orderFullName);
        order.setPhoneNumber(orderPhoneNumber);
        order.setOrderStatus("CREATED");
        order.setPaymentStatus("NOT PAID");
        order.setUser(user);
        order.setOrderItem(orderitems);
        order.setOrderAmt(totalOrderPrice.get());
        order.setOrderCreateAt(new Date());
        Order save;
        if(order.getOrderAmt()>0){
            save = this.orderReop.save(order);
            cart.getItems().clear();
            this.cartRepo.save(cart);
            System.out.println("Hello");
        }else {
            System.out.println(order.getOrderAmt());
            throw new ResourceNotFoundException("Plz Add Cart First and place Order");
        }

        OrderDto orderDto = this.modelMapper.map(save,OrderDto.class);
        Set<OrderItemDto> orderItemDtos = save.getOrderItem().stream().map(oi -> {
            OrderItemDto orderItemDto = this.modelMapper.map(oi,OrderItemDto.class);
            ShoeDto shoeDto = this.modelMapper.map(oi.getShoe(), ShoeDto.class);
            ShoeModelDto shoeModelDto = this.modelMapper.map(oi.getShoe().getShoeModel(), ShoeModelDto.class);
            orderItemDto.setShoeDto(shoeDto);
            orderItemDto.getShoeDto().setShoeModelDto(shoeModelDto);
            return orderItemDto;
        })
                .collect(Collectors.toSet());
        orderDto.setOrderItem(orderItemDtos);
        return orderDto;
    }

    public void CancelOrder(int orderId){
        Order order = this.orderReop.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order not Found"));
        this.orderReop.delete(order);
    }


    public OrderResponse findById(int orderId){
        Order order = this.orderReop.findById(orderId).orElseThrow(()->new ResourceNotFoundException("order not found"));
//      OrderDto orderDto = this.modelMapper.map(order,OrderDto.class);
        OrderDto orderDto = modelMapper.map(order, OrderDto.class);

        // Custom mapping for each OrderItem to OrderItemDto
        Set<OrderItemDto> orderItemDtos = order.getOrderItem().stream().map(orderItem -> {
            OrderItemDto orderItemDto = modelMapper.map(orderItem, OrderItemDto.class);

            // Ensure shoe is properly loaded and mapped
            if (orderItem.getShoe() != null) {
                ShoeDto shoeDto = modelMapper.map(orderItem.getShoe(), ShoeDto.class);
                ShoeModelDto shoeModelDto = modelMapper.map(orderItem.getShoe().getShoeModel(),ShoeModelDto.class);
                orderItemDto.setShoeDto(shoeDto);
                orderItemDto.getShoeDto().setShoeModelDto(shoeModelDto);
            }
            return orderItemDto;
        }).collect(Collectors.toSet());

        orderDto.setOrderItem(orderItemDtos);

        // Prepare the response
        OrderResponse response = new OrderResponse();
        response.setContent(Collections.singletonList(orderDto));
        response.setStatus(orderDto.isStatus());
        response.setOrderCreateAt(orderDto.getOrderCreateAt());
        // Since it's a single order, these values can be set accordingly
        response.setPageNumber(0);
        response.setLastPage(true);
        response.setPageSize(1);
        response.setTotalPage(1);
//        response.setTotalElement(1L);

        return response;
    }

    // find All Product by page

    public OrderResponse findAllOrders(int pageNumber,int pageSize ){

        Pageable pageable=PageRequest.of(pageNumber, pageSize);
        Page<Order> findAll=this.orderReop.findAll(pageable);
        List<Order> content = findAll.getContent();

        //change order to orderDto
//        List<OrderDto> collect = content.stream().map((each)->this.modelMapper.map(each,OrderDto.class)).collect(Collectors.toList());
        List<OrderDto> collect = content.stream().map(order -> {
            // Map Order to OrderDto
            OrderDto orderDto = modelMapper.map(order, OrderDto.class);

            // Custom mapping for each OrderItem to OrderItemDto
            Set<OrderItemDto> orderItemDtos = order.getOrderItem().stream().map(orderItem -> {
                OrderItemDto orderItemDto = modelMapper.map(orderItem, OrderItemDto.class);
                // Ensure shoe is properly loaded and mapped
                if (orderItem.getShoe() != null) {
                    ShoeDto shoeDto = modelMapper.map(orderItem.getShoe(), ShoeDto.class);
                    ShoeModelDto shoeModelDto = modelMapper.map(orderItem.getShoe().getShoeModel(),ShoeModelDto.class);
                    orderItemDto.setShoeDto(shoeDto);
                    orderItemDto.getShoeDto().setShoeModelDto(shoeModelDto);

                }
                return orderItemDto;
            }).collect(Collectors.toSet()); // Change toSet() here

            orderDto.setOrderItem(orderItemDtos);
            return orderDto;
        }).collect(Collectors.toList());
        OrderResponse response= new OrderResponse();
        response.setContent(collect);
        response.setPageNumber(findAll.getNumber());
        response.setLastPage(findAll.isLast());
        response.setPageSize(findAll.getSize());
        response.setTotalPage(findAll.getTotalPages());

        //getTotalElements return Long
        response.setTotalElemet(findAll.getTotalElements());

        return response;
    }
    public OrderResponse findOrdersByUserId(int userId) {
//        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Order> orderPage = this.orderReop.findByUser_UserId(userId); // Use the new repository method
//        List<Order> content = orderPage.getContent();

        // Map orders to DTOs
        List<OrderDto> collect = orderPage.stream().map(order -> {
            OrderDto orderDto = modelMapper.map(order, OrderDto.class);

            Set<OrderItemDto> orderItemDtos = order.getOrderItem().stream().map(orderItem -> {
                OrderItemDto orderItemDto = modelMapper.map(orderItem, OrderItemDto.class);
                if (orderItem.getShoe() != null) {
                    ShoeDto shoeDto = modelMapper.map(orderItem.getShoe(), ShoeDto.class);
                    ShoeModelDto shoeModelDto = modelMapper.map(orderItem.getShoe().getShoeModel(),ShoeModelDto.class);
                    orderItemDto.setShoeDto(shoeDto);
                    orderItemDto.getShoeDto().setShoeModelDto(shoeModelDto);
                }
                return orderItemDto;
            }).collect(Collectors.toSet());

            orderDto.setOrderItem(orderItemDtos);
            return orderDto;
        }).collect(Collectors.toList());

        OrderResponse response = new OrderResponse();
        response.setContent(collect);
//        response.setPageNumber(orderPage.getNumber());
//        response.setLastPage(orderPage.isLast());
//        response.setPageSize(orderPage.getSize());
//        response.setTotalPage(orderPage.getTotalPages());
//        response.setTotalElemet(orderPage.getTotalElements());

        return response;
    }
    public OrderDto acceptOrder(int orderid){
      Order order=  this.orderReop.findById(orderid).orElseThrow(() -> new ResourceNotFoundException("order not found"));
      order.setStatus(true);
      Order save = this.orderReop.save(order);
      OrderDto orderDto = this.modelMapper.map(save,OrderDto.class);
      return orderDto;
    }
}
