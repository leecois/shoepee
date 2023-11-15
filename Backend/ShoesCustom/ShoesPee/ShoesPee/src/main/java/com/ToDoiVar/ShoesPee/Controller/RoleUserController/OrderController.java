package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.OrderRequest;
import com.ToDoiVar.ShoesPee.Models.OrderResponse;
import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.Security.config.JwtService;
import com.ToDoiVar.ShoesPee.Services.OrderService;
import com.ToDoiVar.ShoesPee.Services.UserService;
import com.ToDoiVar.ShoesPee.dto.OrderDto;
import com.ToDoiVar.ShoesPee.payload.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/auth")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserService userService;
    //create order

    @PostMapping("/placeorder")
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderRequest orderReq, @RequestHeader("Authorization") String bearertoken) {
        String token = bearertoken.substring(7);
        String username =  jwtService.extractUsername(token);
        OrderDto order=this.orderService.orderCreate(orderReq,username);
        return new ResponseEntity<OrderDto>(order, HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteorder/{orderId}")
    public ResponseEntity<?> cancelOrderById(@PathVariable int orderId){
        this.orderService.CancelOrder(orderId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Order deleted",true),HttpStatus.OK);
    }

    @GetMapping("/getorderbyid/{orderId}")
    public ResponseEntity<OrderDto>findById(@PathVariable int orderId){
        OrderDto orderDto = this.orderService.findById(orderId);
        return new ResponseEntity<OrderDto>(orderDto,HttpStatus.ACCEPTED);
    }


    @GetMapping("/findAll")
    public OrderResponse findAllOrders(
            @RequestParam(defaultValue = "100",value = "pageSize") int pageSize
            ,@RequestParam(defaultValue = "0" ,value ="pageNumber" ) int pageNumber
    )

    {
        OrderResponse findAllOrders = this.orderService.findAllOrders(pageNumber, pageSize);

        return findAllOrders;
    }
    @GetMapping("/getorderbyuserid")
    public ResponseEntity<OrderResponse> getOrdersByUserId(
            @RequestHeader("Authorization") String bearertoken,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        String token = bearertoken.substring(7);
        String username =  jwtService.extractUsername(token);
        User user = userService.getUserByEmail(username);

        OrderResponse orderResponse = orderService.findOrdersByUserId(user.getUserId());
        return new ResponseEntity<>(orderResponse, HttpStatus.OK);
    }
}
