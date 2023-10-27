package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ImageShoe;

import java.util.Optional;

public interface ImageShoeService{
    Optional<ImageShoe> getImageShoeByShoeId(int shoeId);
    ImageShoe addImageShoe(ImageShoe newImageShoe);
    void deleteImageShoe(int shoeId);
}
