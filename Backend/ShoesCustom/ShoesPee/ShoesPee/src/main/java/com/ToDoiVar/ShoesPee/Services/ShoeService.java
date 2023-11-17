package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;

import java.util.List;
import java.util.Optional;

public interface ShoeService {
    List<ShoeDto> getAllShoe();
    ShoeDto getShoeById(int id);
    Shoe findById(int id);
    Shoe addShoe(ShoeDto newShoe,int shoeModelsId);
    ShoeDto editShoe(int id,ShoeDto editShoe);
    List<ShoeDto> getShoeByShoeModel(int shoeModelId);
    Shoe deleteShoe(int id);
}
