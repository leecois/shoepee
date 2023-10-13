package com.ToDoiVar.ShoesPee.Controller;

import com.ToDoiVar.ShoesPee.repositiory.Brand;
import com.ToDoiVar.ShoesPee.Services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shoepee")
public class BrandController {
    @Autowired
    private BrandService brandService;
    @GetMapping("/brand")
    public List<Brand> brands(){
        return brandService.readAllBrand();
    }
}
