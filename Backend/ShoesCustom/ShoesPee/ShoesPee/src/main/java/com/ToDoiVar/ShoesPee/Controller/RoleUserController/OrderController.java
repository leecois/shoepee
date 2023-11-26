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
import org.springframework.security.access.prepost.PreAuthorize;
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

    @GetMapping("/cancelorder/{orderId}")
    public ResponseEntity<?> cancelOrderById(@PathVariable int orderId){
        this.orderService.cancelOrder(orderId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Order cancelled",true),HttpStatus.OK);
    }


    @GetMapping("/getorderbyid/{orderId}")

    public ResponseEntity<OrderResponse>findById(@PathVariable int orderId){
        OrderResponse orderDto = this.orderService.findById(orderId);
        return new ResponseEntity<OrderResponse>(orderDto,HttpStatus.ACCEPTED);
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
