//package com.ToDoiVar.ShoesPee.Services;
//
//import com.ToDoiVar.ShoesPee.Exeption.imageShoeNotFound;
//import com.ToDoiVar.ShoesPee.Exeption.shoeNotFoundException;
//import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
//import com.ToDoiVar.ShoesPee.Models.ImageShoe;
//import com.ToDoiVar.ShoesPee.dto.ImageDto;
//import com.ToDoiVar.ShoesPee.repositiory.ImageShoeRepository;
//import com.ToDoiVar.ShoesPee.repositiory.CustomizedShoeRepository;
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class ImageShoeServiceImp implements ImageShoeService{
//    @Autowired
//    private ImageShoeRepository imageShoeRepository;
//    @Autowired
//    private ModelMapper mapper;
//    @Autowired
//    private CustomizedShoeRepository customizedShoeRepository;
//
//
//    @Override
//    public List<ImageShoe> getImageShoeByShoe(int shoeId) {
//        CustomizedShoe customizedShoe = customizedShoeRepository.findById(shoeId).orElseThrow(() -> new shoeNotFoundException("Shoe not found"));
//        List<ImageShoe> image = imageShoeRepository.getImageShoeByShoe(customizedShoe);
////        List<ImageDto> getImage = image.stream().map(images -> this.mapper.map(images, ImageDto.class)).collect(Collectors.toList());
//        return image;
//    }
//
//    @Override
//    public ImageShoe addImageShoe(ImageDto newImageShoe,int shoeId) {
//        CustomizedShoe customizedShoe = this.customizedShoeRepository.findById(shoeId).orElseThrow(() -> new shoeNotFoundException("shoe not found"));
//        ImageShoe image = this.mapper.map(newImageShoe,ImageShoe.class);
//        image.setCustomizedShoe(customizedShoe);
//        ImageShoe save = this.imageShoeRepository.save(image);
//
//        this.mapper.map(save, ImageDto.class);
//        return save;
//    }
//
//    @Override
//    public void deleteImageShoe(int shoeId) {
//        if(!imageShoeRepository.existsById(shoeId)){
//            throw new imageShoeNotFound("imagShoe not found");
//        }
//        imageShoeRepository.deleteById(shoeId);
//    }
//}
