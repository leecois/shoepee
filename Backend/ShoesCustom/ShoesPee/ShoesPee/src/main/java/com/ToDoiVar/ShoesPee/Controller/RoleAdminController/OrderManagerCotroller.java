package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.Order;
import com.ToDoiVar.ShoesPee.Models.OrderResponse;
import com.ToDoiVar.ShoesPee.Services.OrderService;
import com.ToDoiVar.ShoesPee.dto.DailyOrderSummary;
import com.ToDoiVar.ShoesPee.dto.OrderDto;
import com.ToDoiVar.ShoesPee.dto.QueryDateDto;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")

public class OrderManagerCotroller {
    @Autowired
    private OrderService orderService;

    @PutMapping("/acceptorder/{id}")
    public ResponseEntity<OrderDto> acceptOrder(@PathVariable int id){
        OrderDto order = orderService.acceptOrder(id);
        return new ResponseEntity<OrderDto>(order, HttpStatus.OK);
    }

    @PutMapping("/deliveryorder/{id}")
    public ResponseEntity<OrderDto> deliveryOrder(@PathVariable int id){
        OrderDto order = orderService.deliveryOrder(id);
        return new ResponseEntity<OrderDto>(order, HttpStatus.OK);
    }  @PutMapping("/completedyorder/{id}")
    public ResponseEntity<OrderDto> completedOrder(@PathVariable int id){
        OrderDto order = orderService.completedOrder(id);
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
    @GetMapping("/completed-orders")
    public ResponseEntity<DailyOrderSummary> getCompletedOrdersByDate(
            @RequestBody QueryDateDto queryDateDto) {
        DailyOrderSummary summary = orderService.getCompletedOrdersByDate(queryDateDto.getQueryDate());
        return ResponseEntity.ok(summary);
    }

    @GetMapping("/revenue-today")
    public ResponseEntity<BigDecimal> getTodayRevenue() {
        BigDecimal revenue = orderService.calculateTodayRevenue();
        return ResponseEntity.ok(revenue);
    }
}
