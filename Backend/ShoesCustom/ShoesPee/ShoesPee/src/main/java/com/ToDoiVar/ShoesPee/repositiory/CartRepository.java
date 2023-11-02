package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.Cart;
import com.ToDoiVar.ShoesPee.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart,Integer> {
    public Optional<Cart> findByUser(User user);
}
