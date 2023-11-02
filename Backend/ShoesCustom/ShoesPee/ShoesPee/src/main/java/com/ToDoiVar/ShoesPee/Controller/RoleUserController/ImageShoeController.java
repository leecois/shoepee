package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.Services.ImageShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
public class ImageShoeController {
    @Autowired
    private ImageShoeService imageShoeService;

    @GetMapping("/getimageshoe/{shoeid}")
    public ResponseEntity<List<ImageShoe>> getImageShoeByShoeId(@PathVariable int shoeid){
        return new ResponseEntity<>(imageShoeService.getImageShoeByShoeId(shoeid), HttpStatus.OK);
    }
}
