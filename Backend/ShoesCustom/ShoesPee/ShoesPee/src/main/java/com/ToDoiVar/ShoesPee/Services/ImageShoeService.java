package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;

import java.util.List;
import java.util.Optional;

public interface ImageShoeService{
    List<ImageShoe> getImageShoeByShoeId(int shoeId);
    ImageShoe addImageShoe(ImageShoe newImageShoe);
    void deleteImageShoe(int shoeId);
}
