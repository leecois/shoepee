package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.Services.ImageShoeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

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
