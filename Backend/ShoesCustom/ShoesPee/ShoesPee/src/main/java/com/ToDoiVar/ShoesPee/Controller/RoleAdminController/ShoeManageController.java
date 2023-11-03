package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Services.ShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
public class ShoeManageController {
    @Autowired
    private ShoeService shoeService;
    @GetMapping("/shoes")
    public ResponseEntity<List<Shoe>> getAllShoe(){
        return new ResponseEntity<>(shoeService.getAllShoe(), HttpStatus.FOUND);
    }
    @GetMapping("/getshoebyshoemodelid/{shoemodelid}")
    public ResponseEntity<List<Shoe>> getShoeByShoemodelId(@PathVariable int shoemodelid){
        return new ResponseEntity<>(shoeService.getShoeByShoeModelId(shoemodelid),HttpStatus.OK);
    }
    @PostMapping("/addshoe")
    public ResponseEntity<Shoe> addShoe(@RequestBody Shoe newShoe){
        return new ResponseEntity<>(shoeService.addShoe(newShoe),HttpStatus.OK);
    }
    @PutMapping("/editshoe/{id}")
    public ResponseEntity<Shoe> editShoe(@PathVariable int id,@RequestBody Shoe editshoe){
        return new ResponseEntity<>(shoeService.editShoe(id,editshoe),HttpStatus.OK);
    }
    @DeleteMapping("/deleteshe/{id}")
        public ResponseEntity<String> deleteShoe(@PathVariable int id){
            shoeService.deleteShoe(id);
            return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
    }

}
