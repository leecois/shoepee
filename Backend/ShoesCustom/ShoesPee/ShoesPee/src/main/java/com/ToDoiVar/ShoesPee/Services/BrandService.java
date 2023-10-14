package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.repositiory.Brand;
import com.ToDoiVar.ShoesPee.repositiory.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;
    public List<Brand> readAllBrand(){
        return brandRepository.findAll();
    }
}
