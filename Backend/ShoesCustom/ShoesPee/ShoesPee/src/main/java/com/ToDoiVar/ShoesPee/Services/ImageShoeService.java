package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;
import com.ToDoiVar.ShoesPee.dto.ImageDto;

import java.util.List;
import java.util.Optional;

public interface ImageShoeService{
    List<ImageShoe> getImageShoeByShoe(int shoeId);
    ImageDto addImageShoe(ImageDto newImageShoe);
    void deleteImageShoe(int shoeId);
}
