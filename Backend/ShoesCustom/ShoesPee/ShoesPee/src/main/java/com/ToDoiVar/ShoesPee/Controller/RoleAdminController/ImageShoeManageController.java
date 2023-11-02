package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

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
@RequestMapping("/api/v1/admin")
public class ImageShoeManageController {
    @Autowired
    private ImageShoeService imageShoeService;

    @GetMapping("/getimageshoe/{shoeid}")
    public ResponseEntity<List<ImageShoe>> getImageShoeByShoeId(@PathVariable int shoeid){
        return new ResponseEntity<>(imageShoeService.getImageShoeByShoeId(shoeid),HttpStatus.OK);
    }
    @PostMapping("/addimageshoe")
    public ResponseEntity<ImageShoe> addImageShoe(@RequestBody ImageShoe newImageShoe){
        return new ResponseEntity<>(imageShoeService.addImageShoe(newImageShoe), HttpStatus.OK);
    }
    @DeleteMapping("/deleteimageshoe")
    public ResponseEntity<String> deleteImageShoe(@PathVariable int shoeId){
        imageShoeService.deleteImageShoe(shoeId);
        return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
    }
}
