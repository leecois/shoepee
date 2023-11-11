package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

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
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class shoeModelController {
    @Autowired
    private final ShoeModelService shoeModelService;
//    @PostMapping("/addShoemodel")
//    public ResponseEntity<ShoeModels> addShoeModel(@RequestBody ShoeModels newShoeModel){
//        return new ResponseEntity<>(shoeModelService.addShoeModel(newShoeModel),HttpStatus.OK);
//    }
        @GetMapping("/shoemodels")
    public ResponseEntity<List<ShoeModelDto>> getAllShoeModel(@RequestParam(defaultValue = "")String searchKey){
        List<ShoeModelDto> getALlShoeModel = shoeModelService.getAllShoeModel(searchKey);
        return new ResponseEntity<List<ShoeModelDto>>(getALlShoeModel, HttpStatus.OK);
    }

    @GetMapping("/getshoemodelbyname/{name}")
    public ResponseEntity<ShoeModel> getShoeModelByName(@PathVariable String name){
        return new ResponseEntity<>(shoeModelService.getShoeModelByName(name),HttpStatus.OK);
    }
    @GetMapping("/getshoemodelbybrand/{id}")
    public ResponseEntity<List<ShoeModelDto>> getShoeModelByBrandId(@PathVariable int id){
        List<ShoeModelDto>getShoemodelByBrand = this.shoeModelService.getShoeModelByBrand(id);
        return new ResponseEntity<List<ShoeModelDto>>(getShoemodelByBrand,HttpStatus.OK);
    }
//    @GetMapping("/getshoemodelbyid/{id}")
//    public ShoeModels getShoeModelById(@PathVariable int id){
//        return shoeModelService.getShoeModelById(id);
//    }\\`
//    @PutMapping("/editshoemode/{id}")
//    public ShoeModels editShoeModel(@PathVariable int id,@RequestBody ShoeModels editShoeModel){
//        return shoeModelService.updateShoeModel(id,editShoeModel);
//    }
//    @DeleteMapping("/removeshoemodel/{id}")
//    public void removeShoeModel(@PathVariable int id){
//       shoeModelService.removeShoeModel(id);
//    }
}
