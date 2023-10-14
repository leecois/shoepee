package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;

import java.util.List;

public interface ShoeModelService {
    public ShoeModels addShoeModel(ShoeModels shoeModels);
    public List<ShoeModels> getAllShoeModel();
    public ShoeModels getShoeModelById(Long id);
    public ShoeModels updateShoeModel(Long id,ShoeModels updateShoeModel);
    public void removeShoeModel(Long id);
    public ShoeModels getShoeModelByName(String name);
}
