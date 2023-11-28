package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Services.CustomizedShoeService;
import com.ToDoiVar.ShoesPee.dto.CustomizedShoeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")

@RestController
@RequestMapping("/api/v1/auth")
public class CustomizedShoeController {
    @Autowired
    private CustomizedShoeService shoeService;
    @GetMapping("/shoes")
    public ResponseEntity<List<CustomizedShoeDto>> getAllShoe(@RequestParam(defaultValue = "")String searchKey){
        return new ResponseEntity<List<CustomizedShoeDto>>(shoeService.getAllShoe(searchKey),HttpStatus.OK);
    }
    @GetMapping("/getshoebyshoemodelid/{id}")
    public ResponseEntity<List<CustomizedShoeDto>> getShoeByShoemodelId(@PathVariable int id){
      return new ResponseEntity<List<CustomizedShoeDto>>(shoeService.getShoeByShoeModel(id),HttpStatus.OK);
    }
}
