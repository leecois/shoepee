package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.Services.ShoeModelService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class ShoeModelManageController {
    @Autowired
    private final ShoeModelService shoeModelService;
    @PostMapping("/addShoemodel")
    public ShoeModels addShoeModel(@RequestBody ShoeModels newShoeModel){
        return shoeModelService.addShoeModel(newShoeModel);
    }
    @GetMapping("/getallshoemodel")
    public ResponseEntity<List<ShoeModels>> getAllShoeModel(){
        return new ResponseEntity<>(shoeModelService.getAllShoeModel(), HttpStatus.FOUND);
    }

    @GetMapping("/getshoemodelbyname/{name}")
    public ShoeModels getShoeModelByName(@PathVariable String name){
        return shoeModelService.getShoeModelByName(name);
    }
    @GetMapping("/getshoemodelbyid/{id}")
    public ShoeModels getShoeModelById(@PathVariable int id){
        return shoeModelService.getShoeModelById(id);
    }
    @PutMapping("/editshoemode/{id}")
    public ShoeModels editShoeModel(@PathVariable int id,@RequestBody ShoeModels editShoeModel){
        return shoeModelService.updateShoeModel(id,editShoeModel);
    }
    @DeleteMapping("/removeshoemodel/{id}")
    public void removeShoeModel(@PathVariable int id){
       shoeModelService.removeShoeModel(id);
    }
}
