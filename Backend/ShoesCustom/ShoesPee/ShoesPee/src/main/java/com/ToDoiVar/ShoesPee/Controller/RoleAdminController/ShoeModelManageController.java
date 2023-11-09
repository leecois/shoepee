package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.Services.ShoeModelService;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class ShoeModelManageController {
    @Autowired
    private final ShoeModelService shoeModelService;
    @PostMapping("/addShoemodel/{brandid}")
    public ResponseEntity<ShoeModelDto> addShoeModel(@RequestBody ShoeModelDto newShoeModel,@PathVariable int brandid){
        ShoeModelDto newShoemodel = shoeModelService.addShoeModel(newShoeModel,brandid);
        return new ResponseEntity<ShoeModelDto>(newShoemodel,HttpStatus.CREATED);
    }
    @GetMapping("/shoemodels")
    public ResponseEntity<List<ShoeModelDto>> getAllShoeModel(){
        List<ShoeModelDto> viewall = shoeModelService.getAllShoeModel();
        return new ResponseEntity<List<ShoeModelDto>>(viewall,HttpStatus.OK);
    }

    @GetMapping("/getshoemodelbyname/{name}")
    public ResponseEntity<ShoeModel> getShoeModelByName(@PathVariable String name){
        return new ResponseEntity<>(shoeModelService.getShoeModelByName(name),HttpStatus.OK);
    }
    @GetMapping("/getshoemodelbyid/{id}")
    public ResponseEntity<ShoeModel> getShoeModelById(@PathVariable int id){
        return new ResponseEntity<>(shoeModelService.getShoeModelById(id),HttpStatus.OK);
    }
    @GetMapping("/getshoemodelbybrand/{id}")
    public ResponseEntity<List<ShoeModelDto>> getShoeModelByBrandId(@PathVariable int id){
        List<ShoeModelDto>getShoemodelByBrand = this.shoeModelService.getShoeModelByBrand(id);
        return new ResponseEntity<List<ShoeModelDto>>(getShoemodelByBrand,HttpStatus.OK);
    }
    @PutMapping("/editshoemode/{id}")
    public ResponseEntity<ShoeModel> editShoeModel(@PathVariable int id, @RequestBody ShoeModel editShoeModel){
        return new ResponseEntity<>(shoeModelService.updateShoeModel(id,editShoeModel),HttpStatus.OK);
    }
    @DeleteMapping("/deleteshoemodel/{id}")
    public ResponseEntity<String> removeShoeModel(@PathVariable int id){
       shoeModelService.removeShoeModel(id);
       return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
    }

}
