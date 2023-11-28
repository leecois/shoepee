package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
import com.ToDoiVar.ShoesPee.Services.CustomizedShoeService;
import com.ToDoiVar.ShoesPee.dto.CustomizedShoeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
public class CustomizedShoeManageController {
    @Autowired
    private CustomizedShoeService shoeService;
    @GetMapping("/shoes")
    public ResponseEntity<List<CustomizedShoeDto>> getAllShoe(@RequestParam(defaultValue = "")String searchKey){
        return new ResponseEntity<List<CustomizedShoeDto>>(shoeService.getAllShoe(searchKey), HttpStatus.OK);
    }
    @GetMapping("/getshoebyshoemodelid/{id}")
    public ResponseEntity<List<CustomizedShoeDto>> getShoeByShoemodelId(@PathVariable int id){
        return new ResponseEntity<List<CustomizedShoeDto>>(shoeService.getShoeByShoeModel(id),HttpStatus.OK);
    }
    @PostMapping("/addshoe")
    public ResponseEntity<CustomizedShoe> addShoe(@RequestBody CustomizedShoeDto newShoe){
        return new ResponseEntity<CustomizedShoe>(shoeService.addShoe(newShoe),HttpStatus.OK);
    }
    @PutMapping("/editshoe/{id}")
    public ResponseEntity<CustomizedShoeDto> editShoe(@PathVariable int id, @RequestBody CustomizedShoeDto editshoe){
        return new ResponseEntity<CustomizedShoeDto>(shoeService.editShoe(id,editshoe),HttpStatus.OK);
    }
    @PutMapping("/deleteshe/{id}")
        public ResponseEntity<CustomizedShoe> deleteShoe(@PathVariable int id){
           CustomizedShoe customizedShoe = shoeService.deleteShoe(id);
            return new ResponseEntity<CustomizedShoe>(customizedShoe,HttpStatus.OK);
    }

}
