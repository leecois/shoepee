package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Services.ShoeService;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
public class ShoeManageController {
    @Autowired
    private ShoeService shoeService;
    @GetMapping("/shoes")
    public ResponseEntity<List<ShoeDto>> getAllShoe(){
        return new ResponseEntity<List<ShoeDto>>(shoeService.getAllShoe(), HttpStatus.OK);
    }
    @GetMapping("/getshoebyshoemodelid/{id}")
    public ResponseEntity<List<ShoeDto>> getShoeByShoemodelId(@PathVariable int id){
        return new ResponseEntity<List<ShoeDto>>(shoeService.getShoeByShoeModel(id),HttpStatus.OK);
    }
    @PostMapping("/addshoe/{shoemodelid}")
    public ResponseEntity<Shoe> addShoe(@RequestBody ShoeDto newShoe,@PathVariable int shoemodelid){
        return new ResponseEntity<Shoe>(shoeService.addShoe(newShoe,shoemodelid),HttpStatus.OK);
    }
    @PutMapping("/editshoe/{id}")
    public ResponseEntity<ShoeDto> editShoe(@PathVariable int id,@RequestBody ShoeDto editshoe){
        return new ResponseEntity<ShoeDto>(shoeService.editShoe(id,editshoe),HttpStatus.OK);
    }
    @PutMapping("/deleteshe/{id}")
        public ResponseEntity<Shoe> deleteShoe(@PathVariable int id){
           Shoe shoe = shoeService.deleteShoe(id);
            return new ResponseEntity<Shoe>(shoe,HttpStatus.OK);
    }

}
