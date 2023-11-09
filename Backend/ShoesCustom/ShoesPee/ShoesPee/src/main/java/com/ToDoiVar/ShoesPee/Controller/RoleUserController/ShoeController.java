package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

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
@RequestMapping("/api/v1/auth")
public class ShoeController {
    @Autowired
    private ShoeService shoeService;
    @GetMapping("/shoes")
    public ResponseEntity<List<ShoeDto>> getAllShoe(){
        return new ResponseEntity<List<ShoeDto>>(shoeService.getAllShoe(),HttpStatus.OK);
    }
    @GetMapping("/getshoebyshoemodelid/{id}")
    public ResponseEntity<List<ShoeDto>> getShoeByShoemodelId(@PathVariable int id){
      return new ResponseEntity<List<ShoeDto>>(shoeService.getShoeByShoeModel(id),HttpStatus.OK);
    }
}
