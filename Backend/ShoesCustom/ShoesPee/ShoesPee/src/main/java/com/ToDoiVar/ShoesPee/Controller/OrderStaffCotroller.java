package com.ToDoiVar.ShoesPee.Controller;

import com.ToDoiVar.ShoesPee.Models.OrderResponse;
import com.ToDoiVar.ShoesPee.Services.OrderService;
import com.ToDoiVar.ShoesPee.dto.OrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/staff")
@Lazy
public class OrderStaffCotroller {
    @Autowired
    private OrderService orderService;

    @PutMapping("/acceptorder/{id}")
    public ResponseEntity<OrderDto> acceptOrder(@PathVariable int id){
        OrderDto order = orderService.acceptOrder(id);
        return new ResponseEntity<OrderDto>(order, HttpStatus.OK);
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
}
