package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

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
@RequestMapping("/api/v1/auth")
public class ShoeController {
    @Autowired
    private ShoeService shoeService;
    @GetMapping("/shoes")
    public List<Shoe> getAllShoe(){
        return shoeService.getAllShoe();
    }
    @GetMapping("/getshoebyshoemodelid/{shoemodelid}")
    public Optional<List<Shoe>> getShoeByShoemodelId(@PathVariable int shomemodelId){
      return shoeService.getShoeByShoeModelId(shomemodelId);
    }
}
