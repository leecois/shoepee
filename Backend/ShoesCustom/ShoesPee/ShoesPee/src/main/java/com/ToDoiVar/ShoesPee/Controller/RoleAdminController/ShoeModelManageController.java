package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.Services.ShoeModelService;
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
    @PostMapping("/addShoemodel")
    public ResponseEntity<ShoeModels> addShoeModel(@RequestBody ShoeModels newShoeModel){
        return new ResponseEntity<>(shoeModelService.addShoeModel(newShoeModel),HttpStatus.OK);
    }
    @GetMapping("/shoemodels")
    public ResponseEntity<List<ShoeModels>> getAllShoeModel(){
        return new ResponseEntity<>(shoeModelService.getAllShoeModel(), HttpStatus.OK);
    }

    @GetMapping("/getshoemodelbyname/{name}")
    public ResponseEntity<ShoeModels> getShoeModelByName(@PathVariable String name){
        return new ResponseEntity<>(shoeModelService.getShoeModelByName(name),HttpStatus.OK);
    }
    @GetMapping("/getshoemodelbyid/{id}")
    public ResponseEntity<ShoeModels> getShoeModelById(@PathVariable int id){
        return new ResponseEntity<>(shoeModelService.getShoeModelById(id),HttpStatus.OK);
    }
    @GetMapping("/getshoemodelbybrandid/{id}")
    public Optional<List<ShoeModels>> getShoeModelByBrandId(@PathVariable int id){
        return shoeModelService.getShoeModelByBrandId(id);
    }
    @PutMapping("/editshoemode/{id}")
    public ResponseEntity<ShoeModels> editShoeModel(@PathVariable int id,@RequestBody ShoeModels editShoeModel){
        return new ResponseEntity<>(shoeModelService.updateShoeModel(id,editShoeModel),HttpStatus.OK);
    }
    @DeleteMapping("/deleteshoemodel/{id}")
    public ResponseEntity<String> removeShoeModel(@PathVariable int id){
       shoeModelService.removeShoeModel(id);
       return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
    }

}
