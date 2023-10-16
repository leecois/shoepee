package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;

import java.util.List;

public interface ShoeModelService {
    public ShoeModels addShoeModel(ShoeModels shoeModels);
    public List<ShoeModels> getAllShoeModel();
    public ShoeModels getShoeModelById(int id);
    public ShoeModels updateShoeModel(int id,ShoeModels updateShoeModel);
    public void removeShoeModel(int id);
    public ShoeModels getShoeModelByName(String name);
}
