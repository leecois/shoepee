package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

//import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.Models.Size;
import com.ToDoiVar.ShoesPee.Services.SizeService;
import com.ToDoiVar.ShoesPee.Services.SizeServiceImp;
import com.ToDoiVar.ShoesPee.repositiory.SizeRepository;
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
public class SizeController {
    @Autowired
    private SizeService sizeService;
    @PostMapping("/addsize")
    public ResponseEntity<Size> addSize(@RequestBody Size newSize) {
        return new ResponseEntity<>(sizeService.addSize(newSize), HttpStatus.OK);
    }
    @GetMapping("/size/{id}")
    public Size getSizeById(@PathVariable int id){
        return sizeService.getSizeById(id);
    }
    @GetMapping("/sizes")
    public ResponseEntity<List<Size>> getAllSize(){
        return new ResponseEntity<List<Size>>(sizeService.getAllSize(),HttpStatus.OK);
    }
}
