package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Services.ShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
public class ShoeController {
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
}
