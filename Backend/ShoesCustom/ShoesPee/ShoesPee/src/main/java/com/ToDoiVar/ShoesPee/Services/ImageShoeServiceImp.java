package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.imageShoeNotFound;
import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.repositiory.ImageShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageShoeServiceImp implements ImageShoeService{
    @Autowired
    private ImageShoeRepository imageShoeRepository;


    @Override
    public List<ImageShoe> getImageShoeByShoeId(int shoeId) {
        return imageShoeRepository.getImageShoeByShoeId(shoeId).orElseThrow(() -> new imageShoeNotFound("iamgeShoe not foud"));
    }

    @Override
    public ImageShoe addImageShoe(ImageShoe newImageShoe) {
        return imageShoeRepository.save(newImageShoe);
    }

    @Override
    public void deleteImageShoe(int shoeId) {
        if(!imageShoeRepository.existsById(shoeId)){
            throw new imageShoeNotFound("imagShoe not found");
        }
        imageShoeRepository.deleteById(shoeId);
    }
}
