package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Brand;

import java.util.List;
public interface BrandService {
    public List<Brand> getAllBrand();
    public Brand getBrandById(int id);
    public Brand getBrandByName(String name);
    public Brand addBrand(Brand newBrand);
    public void deleteBrand(int id);
    public Brand editBrand(int id,Brand editBrand);
}
