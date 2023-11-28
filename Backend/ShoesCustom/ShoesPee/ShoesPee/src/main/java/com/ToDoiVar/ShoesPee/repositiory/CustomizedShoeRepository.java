package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CustomizedShoeRepository extends JpaRepository<CustomizedShoe,Integer> {
    List<CustomizedShoe> getShoeByShoeModel(ShoeModel shoemodel);
    Optional<CustomizedShoe> getCustomizedShoeByName(String nameShoe);
    List<CustomizedShoe> findCustomizedShoeByNameContainingIgnoreCase(String name);
}
