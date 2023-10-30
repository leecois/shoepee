package com.ToDoiVar.ShoesPee.repositiory;


import com.ToDoiVar.ShoesPee.Models.Size;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SizeRepository extends JpaRepository<Size,Integer> {
    Optional<Size> getSizesBySize(String size);
    Optional<List<Size>> getSizesByid(int id);
}
