package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ImageShoeRepository extends JpaRepository<ImageShoe,Integer> {
    Optional<List<ImageShoe>> getImageShoeByShoeId(int shoeId);
}
