//package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;
//
//import com.ToDoiVar.ShoesPee.Models.ImageShoe;
//import com.ToDoiVar.ShoesPee.Services.ImageShoeService;
//import com.ToDoiVar.ShoesPee.dto.ImageDto;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api/v1/admin")
//public class ImageShoeManageController {
//    @Autowired
//    private ImageShoeService imageShoeService;
//
//    @GetMapping("/getimageshoe/{id}")
//    public ResponseEntity<List<ImageShoe>> getImageShoeByShoeId(@PathVariable int id){
//        return new ResponseEntity<List<ImageShoe>>(imageShoeService.getImageShoeByShoe(id),HttpStatus.OK);
//    }
//    @PostMapping("/addimageshoe/{shoeId}")
//    public ResponseEntity<ImageShoe> addImageShoe(@RequestBody ImageDto newImageShoe,@PathVariable int shoeId){
//        return new ResponseEntity<ImageShoe>(imageShoeService.addImageShoe(newImageShoe,shoeId), HttpStatus.OK);
//    }
//    @DeleteMapping("/deleteimageshoe")
//    public ResponseEntity<String> deleteImageShoe(@PathVariable int shoeId){
//        imageShoeService.deleteImageShoe(shoeId);
//        return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
//    }
//}
