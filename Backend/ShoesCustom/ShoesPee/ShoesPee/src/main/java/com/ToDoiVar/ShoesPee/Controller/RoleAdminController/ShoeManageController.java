package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Services.ShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
public class ShoeManageController {
    @Autowired
    private ShoeService shoeService;
    @GetMapping("/getallshoe")
    public ResponseEntity<List<Shoe>> getAllShoe(){
        return new ResponseEntity<>(shoeService.getAllShoe(), HttpStatus.FOUND);
    }
    @GetMapping("/getshoebyshoemodelid/{shoemodelid}")
    public Optional<List<Shoe>> getShoeByShoemodelId(@PathVariable int shomemodelId){
        return shoeService.getShoeByShoeModelId(shomemodelId);
    }
    @PostMapping("/addshoe")
    public Shoe addShoe(@RequestBody Shoe newShoe){
        return shoeService.addShoe(newShoe);
    }
    @PostMapping("/editshoe/{id}")
    public Shoe editShoe(@PathVariable int id,@RequestBody Shoe editshoe){
        return shoeService.editShoe(id,editshoe);
    }
    @DeleteMapping("/deleteshe/{id}")
        public void deleteShoe(int id){
            shoeService.deleteShoe(id);
    }

}
