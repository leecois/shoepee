package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;

import java.util.List;
import java.util.Optional;

public interface ShoeService {
    List<Shoe> getAllShoe();
    ShoeDto getShoeById(int id);
    ShoeDto addShoe(ShoeDto newShoe);
    ShoeDto editShoe(int id,ShoeDto editShoe);
    List<ShoeDto> getShoeByShoeModel(int shoeModelId);
    void deleteShoe(int id);
}
