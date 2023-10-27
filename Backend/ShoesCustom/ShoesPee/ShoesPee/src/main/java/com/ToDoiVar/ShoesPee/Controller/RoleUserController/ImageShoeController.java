package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.Services.ImageShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/ap/v1/auth")
public class ImageShoeController {
    @Autowired
    private ImageShoeService imageShoeService;

    @GetMapping("/getimageshoe/{shoeid}")
    public Optional<ImageShoe> getImageShoeByShoeId(@PathVariable int shoeid){
        return imageShoeService.getImageShoeByShoeId(shoeid);
    }
}
