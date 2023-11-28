package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.Services.BrandService;
import com.ToDoiVar.ShoesPee.dto.BrandDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
public class BrandController {
    @Autowired
    private BrandService brandService;
    @GetMapping("/brands")
    public List<Brand> getAllBrand(@RequestParam(defaultValue = "")String searchKey){
//        List<Brand> allbrand = this.brandService.getAllBrand();
        List<Brand> brands= brandService.getAllBrand(searchKey);

        return brands;
    }
    @GetMapping("/getbrandbyid/{id}")
    public ResponseEntity<BrandDto> getBrandById(@PathVariable int id){
        BrandDto brand = this.brandService.getBrandById(id);
        return new ResponseEntity<BrandDto>(brand, HttpStatus.OK);
    }
    @GetMapping("/getbrandbyname/{name}")
    public ResponseEntity<BrandDto> getBrandByName(@PathVariable String name){
        return new ResponseEntity<BrandDto>(brandService.getBrandByName(name),HttpStatus.OK);
    }
//    @GetMapping("/getall")
//
//    public List<Brand>getAll(){
//        return brandService.getAll();
//    }
//    @PostMapping("/addbrand")
//    public Brand addBrand(@RequestBody Brand newBrand){
//        return brandService.addBrand(newBrand);
//    }
//    @PutMapping("/editbrand/{id}")
//    public Brand editBrand(@PathVariable int id,@RequestBody Brand editBrand){
//        return brandService.editBrand(id,editBrand);
//    }
//    @DeleteMapping("/deletebrand/{id}")
//    public void deleteBrand(@PathVariable int id){
//        brandService.deleteBrand(id);
//    }
}
