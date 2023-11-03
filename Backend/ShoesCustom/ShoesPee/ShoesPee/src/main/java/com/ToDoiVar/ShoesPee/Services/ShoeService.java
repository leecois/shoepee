package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Shoe;

import java.util.List;
import java.util.Optional;

public interface ShoeService {
    List<Shoe> getAllShoe();
    Shoe getShoeById(int id);
    Shoe addShoe(Shoe newShoe);
    Shoe editShoe(int id,Shoe editShoe);
    List<Shoe> getShoeByShoeModelId(int shoeModelId);
    void deleteShoe(int id);
}
