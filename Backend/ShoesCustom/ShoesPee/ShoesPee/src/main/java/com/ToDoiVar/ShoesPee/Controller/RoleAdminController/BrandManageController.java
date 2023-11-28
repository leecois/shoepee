package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Services.BrandService;
import com.ToDoiVar.ShoesPee.dto.BrandDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")

public class BrandManageController {
    @Autowired
    private BrandService brandService;
    @GetMapping("/brands")
    public ResponseEntity<List<Brand>> getAllBrand(@RequestParam(defaultValue = "")String searchKey){

        return new ResponseEntity<List<Brand>>(brandService.getAllBrand(searchKey), HttpStatus.OK);
    }
    @GetMapping("/getbrandbyid/{id}")
    public ResponseEntity<BrandDto> getBrandById(@PathVariable int id){
        return new ResponseEntity<BrandDto>(brandService.getBrandById(id),HttpStatus.OK);
    }
    @GetMapping("/getbrandbyname/{name}")
    public ResponseEntity<BrandDto> getBrandByName(@PathVariable String name){
        return new ResponseEntity<BrandDto>(brandService.getBrandByName(name),HttpStatus.OK);
    }
    @PostMapping("/addbrand")
    public ResponseEntity<BrandDto> addBrand(@RequestBody BrandDto newBrand){
        BrandDto add = this.brandService.addBrand(newBrand);
        return new ResponseEntity<BrandDto>(add,HttpStatus.ACCEPTED);
    }
    @PutMapping("/editbrand/{id}")
    public ResponseEntity<BrandDto> editBrand(@PathVariable int id,@RequestBody BrandDto editBrand){
        return new ResponseEntity<BrandDto>(brandService.editBrand(id,editBrand),HttpStatus.OK);
    }
    @PutMapping("/deletebrand/{id}")
    public ResponseEntity<Brand> deleteBrand(@PathVariable int id){
        Brand brand = brandService.deleteBrand(id);
        return new ResponseEntity<Brand>(brand,HttpStatus.OK);
    }
}
