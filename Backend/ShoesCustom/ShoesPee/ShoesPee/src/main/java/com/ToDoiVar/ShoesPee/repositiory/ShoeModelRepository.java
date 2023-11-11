package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ShoeModelRepository extends JpaRepository<ShoeModel,Integer> {
    Optional <ShoeModel> getShoeModelsByModelname(String modeName);
    List<ShoeModel> findShoeModelByBrand(Brand brand);
    List<ShoeModel> findShoeModelByModelnameContainingIgnoreCase(String searchKey);

}
