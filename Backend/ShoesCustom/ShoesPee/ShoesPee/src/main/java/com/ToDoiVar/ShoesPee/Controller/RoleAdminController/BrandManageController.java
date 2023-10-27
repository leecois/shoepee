package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")

public class BrandManageController {
    @Autowired
    private BrandService brandService;
    @GetMapping("/brands")
    public List<Brand> getAllBrand(){
        return brandService.getAllBrand();
    }
    @GetMapping("/getbrandbyid/{id}")
    public Brand getBrandById(int id){
        return brandService.getBrandById(id);
    }
    @GetMapping("/getbrandbyname/{name}")
    public Brand getBrandByName(String name){
        return brandService.getBrandByName(name);
    }
    @PostMapping("/addbrand")
    public Brand addBrand(@RequestBody Brand newBrand){
        return brandService.addBrand(newBrand);
    }
    @PutMapping("/editbrand/{id}")
    public Brand editBrand(@PathVariable int id,@RequestBody Brand editBrand){
        return brandService.editBrand(id,editBrand);
    }
    @DeleteMapping("/deletebrand/{id}")
    public void deleteBrand(@PathVariable int id){
        brandService.deleteBrand(id);
    }
}
