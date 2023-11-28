package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.ResourceNotFoundException;
import com.ToDoiVar.ShoesPee.Exeption.userNotFoundException;
import com.ToDoiVar.ShoesPee.Models.*;
import com.ToDoiVar.ShoesPee.dto.*;
import com.ToDoiVar.ShoesPee.repositiory.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
@Service
@Lazy
public class OrderService {
    @Autowired
    private	UserRepository userRepo;
    @Autowired
    private CartRepository cartRepo;
    @Autowired
    private  ModelMapper modelMapper;

    @Autowired
    private OrderRepository orderReop;
    @Autowired
    private CustomizedShoeRepository customizedShoeRepository;


    //order Create method

    public OrderDto orderCreate(OrderRequest request,String username) {

        User user = this.userRepo.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("User not found"));

        int cartId=request.getCartId();
        String orderAddress=request.getOrderAddress();
        String orderPhoneNumber = request.getOrderPhone();
        String orderFullName = request.getCustomerName();
        String orderPaymentMethod = request.getPaymentMethod();
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
            orderItem.setSize(cartItem.getSize());
            //set productQty in orderItem

            orderItem.setProductQuantity(cartItem.getQuantity());

            orderItem.setTotalProductprice(cartItem.getTotalprice());
            orderItem.setOrder(order);

            totalOrderPrice.set(totalOrderPrice.get()+ orderItem.getTotalProductprice());
            int productId=orderItem.getShoe().getId();

            return orderItem;
        }).collect(Collectors.toSet());

        order.setBillingAddress(orderAddress);
//        order.setStatus(false);
        order.setFullName(orderFullName);
        order.setPhoneNumber(orderPhoneNumber);
        order.setOrderStatus("PENDING");
        order.setPaymentStatus("NOT PAID");
        order.setPaymentMethod(orderPaymentMethod);
        order.setUser(user);
        order.setOrderItem(orderitems);
        order.setOrderAmt(totalOrderPrice.get());
        ZonedDateTime nowInVietnam = ZonedDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh"));
        Date orderCreateDate = Date.from(nowInVietnam.toInstant());
        order.setOrderCreateAt(orderCreateDate);
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
            CustomizedShoeDto shoeDto = this.modelMapper.map(oi.getShoe(), CustomizedShoeDto.class);
            ShoeModelDto shoeModelDto = this.modelMapper.map(oi.getShoe().getShoeModel(), ShoeModelDto.class);
            orderItemDto.setShoeDto(shoeDto);
            orderItemDto.getShoeDto().setShoeModelDto(shoeModelDto);
            return orderItemDto;
        })
                .collect(Collectors.toSet());
        orderDto.setOrderItem(orderItemDtos);
        return orderDto;
    }

//    public void CancelOrder(int orderId){
//        Order order = this.orderReop.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order not Found"));
//        this.orderReop.delete(order);
//    }

    public Order getOrderById(int orderid){
        Order order = this.orderReop.findById(orderid).orElseThrow(()->new ResourceNotFoundException("order not found"));
        return order;
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
                CustomizedShoeDto shoeDto = modelMapper.map(orderItem.getShoe(), CustomizedShoeDto.class);
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
//        response.setStatus(orderDto.isStatus());
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
                    CustomizedShoeDto shoeDto = modelMapper.map(orderItem.getShoe(), CustomizedShoeDto.class);
                    ShoeModelDto shoeModelDto = modelMapper.map(orderItem.getShoe().getShoeModel(),ShoeModelDto.class);
                    orderItemDto.setShoeDto(shoeDto);
//                    orderItemDto.getShoeDto().setShoeModelDto(shoeModelDto);

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
        User user = this.userRepo.findById(userId)
                .orElseThrow(() -> new userNotFoundException("User not found"));
//        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Order> orderPage = this.orderReop.findByUser(user); // Use the new repository method
//        List<Order> content = orderPage.getContent();

        // Map orders to DTOs
        List<OrderDto> collect = orderPage.stream().map(order -> {
            OrderDto orderDto = modelMapper.map(order, OrderDto.class);

            Set<OrderItemDto> orderItemDtos = order.getOrderItem().stream().map(orderItem -> {
                OrderItemDto orderItemDto = modelMapper.map(orderItem, OrderItemDto.class);
                if (orderItem.getShoe() != null) {
                    CustomizedShoeDto shoeDto = modelMapper.map(orderItem.getShoe(), CustomizedShoeDto.class);
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
      order.setOrderStatus("CONFIRMED");
        order.getOrderItem().forEach(orderItem -> {
            CustomizedShoe shoe = orderItem.getShoe();
            int soldQuantity = orderItem.getProductQuantity();

            // Giảm số lượng hàng tồn dựa trên số lượng đã bán
//            shoe.setShoeQuantity(shoe.getShoeQuantity() - soldQuantity);
            int newQuantity = shoe.getShoeQuantity() - soldQuantity;
            shoe.setShoeQuantity(newQuantity);
            if (newQuantity <= 0) {
                shoe.setStock(false);
            }
            // Lưu thay đổi vào cơ sở dữ liệu
            this.customizedShoeRepository.save(shoe);
        });
      Order save = this.orderReop.save(order);
      OrderDto orderDto = this.modelMapper.map(save,OrderDto.class);
      return orderDto;
    }
    public OrderDto cancelOrder(int orderid){
      Order order=  this.orderReop.findById(orderid).orElseThrow(() -> new ResourceNotFoundException("order not found"));
      order.setOrderStatus("CANCELLED");

      Order save = this.orderReop.save(order);
      OrderDto orderDto = this.modelMapper.map(save,OrderDto.class);
      return orderDto;
    }
    public OrderDto deliveryOrder(int orderid){
      Order order=  this.orderReop.findById(orderid).orElseThrow(() -> new ResourceNotFoundException("order not found"));
      order.setOrderStatus("SHIPPING");
      Order save = this.orderReop.save(order);
      OrderDto orderDto = this.modelMapper.map(save,OrderDto.class);
      return orderDto;
    }
    public OrderDto completedOrder(int orderid){
      Order order=  this.orderReop.findById(orderid).orElseThrow(() -> new ResourceNotFoundException("order not found"));
      order.setOrderStatus("COMPLETED");
        order.setOrderCompeledAt(new Date());

      Order save = this.orderReop.save(order);
      OrderDto orderDto = this.modelMapper.map(save,OrderDto.class);
      return orderDto;
    }
    public Order paidOrder(int orderid) {
        Order order = orderReop.findById(orderid).orElseThrow(()-> new ResourceNotFoundException("order not found"));
        order.setPaymentStatus("PAID");
        Order savedOrder = this.orderReop.save(order);
        OrderDto orderDto = this.modelMapper.map(savedOrder, OrderDto.class);
        return savedOrder;
    }
//    public DailyOrderSummary getCompletedOrdersToday() {
//        LocalDate today = LocalDate.now();
//        List<Order> filteredOrders = orderReop.findAll()
//                .stream()
//                .filter(order ->
//                        order.getOrderStatus().equals("COMPLETED") &&
//                                Optional.ofNullable(order.getOrderCompeledAt())
//                                        .map(date -> date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate())
//                                        .filter(date -> date.equals(today))
//                                        .isPresent())
//                .collect(Collectors.toList());
//
//        List<OrderDto> orderDtos = filteredOrders.stream()
//                .map(this::convertToDto)
//                .collect(Collectors.toList());
//
//        int numberOfOrders = filteredOrders.size();
//
//        return new DailyOrderSummary(orderDtos, numberOfOrders);
//    }
public DailyOrderSummary getCompletedOrdersByDate(LocalDate selectedDate) {
    List<Order> filteredOrders = orderReop.findAll()
            .stream()
            .filter(order ->
                    order.getOrderStatus().equals("COMPLETED") &&
                            Optional.ofNullable(order.getOrderCompeledAt())
                                    .map(date -> date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate())
                                    .filter(date -> date.equals(selectedDate))
                                    .isPresent())
            .collect(Collectors.toList());

    List<OrderDto> orderDtos = filteredOrders.stream()
            .map(this::convertToDto)
            .collect(Collectors.toList());

    int numberOfOrders = filteredOrders.size();

    return new DailyOrderSummary(orderDtos, numberOfOrders);
}

    private OrderDto convertToDto(Order order) {
        return modelMapper.map(order, OrderDto.class);
    }
    public BigDecimal calculateTodayRevenue() {
        LocalDate today = LocalDate.now();
        return orderReop.findAll()
                .stream()
                .filter(order ->
                        order.getOrderStatus().equals("COMPLETED") &&
                                Optional.ofNullable(order.getOrderCompeledAt())
                                        .map(date -> date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate())
                                        .filter(date -> date.equals(today)) // Thêm bước kiểm tra này
                                        .isPresent()) // Kiểm tra xem có dữ liệu sau khi lọc hay không
                .map(order -> BigDecimal.valueOf(order.getOrderAmt()))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
