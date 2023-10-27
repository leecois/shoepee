package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.Services.ImageShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
public class ImageShoeManageController {
    @Autowired
    private ImageShoeService imageShoeService;

    @GetMapping("/getimageshoe/{shoeid}")
    public Optional<ImageShoe> getImageShoeByShoeId(@PathVariable int shoeid){
        return imageShoeService.getImageShoeByShoeId(shoeid);
    }
    @PostMapping("/addimageshoe")
    public ImageShoe addImageShoe(@RequestBody ImageShoe newImageShoe){
        return imageShoeService.addImageShoe(newImageShoe);
    }
    @DeleteMapping("/deleteimageshoe")
    public void deleteImageShoe(@PathVariable int shoeId){
        imageShoeService.deleteImageShoe(shoeId);
    }
}
