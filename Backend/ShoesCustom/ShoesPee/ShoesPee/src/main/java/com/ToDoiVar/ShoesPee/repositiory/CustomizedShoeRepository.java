package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomizedShoeRepository extends JpaRepository<CustomizedShoe,Integer> {
    List<CustomizedShoe> getShoeByShoeModel(ShoeModel shoemodel);
}
