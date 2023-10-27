package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Brand;

import java.util.List;
public interface BrandService {
     List<Brand> getAllBrand();
     Brand getBrandById(int id);
     Brand getBrandByName(String name);
     Brand addBrand(Brand newBrand);
     void deleteBrand(int id);
     Brand editBrand(int id,Brand editBrand);
}
