package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.Order;
import com.ToDoiVar.ShoesPee.Models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {
//    List<Order> findAllByUserOrderByCreatedDateDesc(User user);
    List<Order> findByUser(User userid);
}
