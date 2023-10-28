package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;

import java.util.List;
import java.util.Optional;

public interface ShoeModelService {
     ShoeModels addShoeModel(ShoeModels shoeModels);
     List<ShoeModels> getAllShoeModel();
     ShoeModels getShoeModelById(int id);
     ShoeModels updateShoeModel(int id,ShoeModels updateShoeModel);
     void removeShoeModel(int id);
     ShoeModels getShoeModelByName(String name);
     Optional<List<ShoeModels>> getShoeModelByBrandId(int id);
}
