package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.dto.BrandDto;

import java.util.List;
public interface BrandService {
     List<Brand> getAllBrand(String searchKey);
//     List<Brand> getAll();
     BrandDto getBrandById(int id);
     BrandDto getBrandByName(String name);
     BrandDto addBrand(BrandDto newBrand);
     Brand deleteBrand(int id);
     BrandDto editBrand(int id,BrandDto editBrand);
}
