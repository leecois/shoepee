package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.Models.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ImageShoeRepository extends JpaRepository<ImageShoe,Integer> {
    List<ImageShoe> getImageShoeByShoe(Shoe shoe);
}
