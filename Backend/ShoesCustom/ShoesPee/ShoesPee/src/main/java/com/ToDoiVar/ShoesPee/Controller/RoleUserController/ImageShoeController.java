//package com.ToDoiVar.ShoesPee.Controller.RoleUserController;
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
//@RequestMapping("/api/v1/auth")
//public class ImageShoeController {
//    @Autowired
//    private ImageShoeService imageShoeService;
//
//    @GetMapping("/getimageshoe/{id}")
//    public ResponseEntity<List<ImageShoe>> getImageShoeByShoeId(@PathVariable int id){
//        return new ResponseEntity<List<ImageShoe>>(imageShoeService.getImageShoeByShoe(id), HttpStatus.OK);
//    }
//}
