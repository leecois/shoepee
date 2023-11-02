package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
}
