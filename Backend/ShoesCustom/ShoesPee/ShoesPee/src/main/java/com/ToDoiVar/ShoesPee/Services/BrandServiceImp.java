package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.BrandExistedException;
import com.ToDoiVar.ShoesPee.Exeption.BrandNotFoundException;
import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.repositiory.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BrandServiceImp implements BrandService{
    @Autowired
    public BrandRepository brandRepository;



    @Override
    public List<Brand> getAllBrand() {
        return brandRepository.findAll();
    }

    @Override
    public Brand getBrandById(int id) {
        return brandRepository.findById(id).orElseThrow(() -> new BrandNotFoundException("This brand does not exist"));
    }

    @Override
    public Brand getBrandByName(String name) {
        return brandRepository.getBrandByBrandName(name).orElseThrow(() ->new BrandNotFoundException("This brand does not exist"));
    }

    @Override
    public Brand addBrand(Brand newBrand) {
        if(BrandExisted(newBrand.getBrandName())){
            throw new BrandExistedException("Sorry, this brand has been exist");
        }
        return brandRepository.save(newBrand);
    }

    private boolean BrandExisted(String brandName) {
        return brandRepository.getBrandByBrandName(brandName).isPresent();
    }

    @Override
    public void deleteBrand(int id) {
        if (!brandRepository.existsById(id)){
            throw new BrandExistedException("This brand could not found");
        }
        brandRepository.deleteById(id);
    }

    @Override
    public Brand editBrand(int id, Brand editBrand) {
        return brandRepository.findById(id).map(br ->{
            br.setBrandName(editBrand.getBrandName());
            br.setImageUrl(editBrand.getImageUrl());
           return brandRepository.save(br);
        }).orElseThrow(() -> new BrandNotFoundException("This brand could not found"));
    }
}
