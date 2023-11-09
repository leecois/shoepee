package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;

import java.util.List;
import java.util.Optional;

public interface ShoeModelService {
     ShoeModelDto addShoeModel(ShoeModelDto shoeModel,int brandid);
     List<ShoeModelDto> getAllShoeModel();
     ShoeModel getShoeModelById(int id);
     ShoeModel updateShoeModel(int id, ShoeModel updateShoeModel);
     void removeShoeModel(int id);
     ShoeModel getShoeModelByName(String name);
     List<ShoeModelDto> getShoeModelByBrand(int brand);
}
