package com.ToDoiVar.ShoesPee.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DailyOrderSummary {
    private List<OrderDto> completedOrders;
    private int orderCount;
}
