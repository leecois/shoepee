package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ShoeModelRepository extends JpaRepository<ShoeModels,Integer> {
    Optional <ShoeModels> getShoeModelsByModelname(String modeName);
    Optional<List<ShoeModels>> getShoeModelsByBrandId(int id);

}
