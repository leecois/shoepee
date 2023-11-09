package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.imageShoeNotFound;
import com.ToDoiVar.ShoesPee.Exeption.shoeNotFoundException;
import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.dto.ImageDto;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;
import com.ToDoiVar.ShoesPee.repositiory.ImageShoeRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImageShoeServiceImp implements ImageShoeService{
    @Autowired
    private ImageShoeRepository imageShoeRepository;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private ShoeRepository shoeRepository;


    @Override
    public List<ImageShoe> getImageShoeByShoe(int shoeId) {
        Shoe shoe = shoeRepository.findById(shoeId).orElseThrow(() -> new shoeNotFoundException("Shoe not found"));
        List<ImageShoe> image = imageShoeRepository.getImageShoeByShoe(shoe);
//        List<ImageDto> getImage = image.stream().map(images -> this.mapper.map(images, ImageDto.class)).collect(Collectors.toList());
        return image;
    }

    @Override
    public ImageDto addImageShoe(ImageDto newImageShoe) {
        ImageShoe image = this.mapper.map(newImageShoe,ImageShoe.class);
        ImageShoe save = imageShoeRepository.save(image);

        return this.mapper.map(save, ImageDto.class);
    }

    @Override
    public void deleteImageShoe(int shoeId) {
        if(!imageShoeRepository.existsById(shoeId)){
            throw new imageShoeNotFound("imagShoe not found");
        }
        imageShoeRepository.deleteById(shoeId);
    }
}
