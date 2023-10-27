package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;

import java.util.List;

public interface ShoeModelService {
     ShoeModels addShoeModel(ShoeModels shoeModels);
     List<ShoeModels> getAllShoeModel();
     ShoeModels getShoeModelById(int id);
     ShoeModels updateShoeModel(int id,ShoeModels updateShoeModel);
     void removeShoeModel(int id);
     ShoeModels getShoeModelByName(String name);
}
