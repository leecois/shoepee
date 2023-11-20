package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Exeption.shoeNotFoundException;
import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.dto.CustomizedShoeDto;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import com.ToDoiVar.ShoesPee.repositiory.ShoeModelRepository;
import com.ToDoiVar.ShoesPee.repositiory.CustomizedShoeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomizedShoeServiceImp implements CustomizedShoeService {
    @Autowired
    private CustomizedShoeRepository customizedShoeRepository;
    @Autowired
    public ModelMapper mapper;
    @Autowired
    public ShoeModelRepository shoeModelRepository;
    @Override
    public List<CustomizedShoeDto> getAllShoe() {
        List<CustomizedShoe> allCustomizedShoe =  this.customizedShoeRepository.findAll();
        List<CustomizedShoeDto> getALlShoe = allCustomizedShoe.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
        return getALlShoe;
    }

    @Override
    public CustomizedShoeDto getShoeById(int id) {
        CustomizedShoe customizedShoe =  this.customizedShoeRepository.findById(id).orElseThrow(() -> new shoeNotFoundException("Shoe not found"));
        return this.mapper.map(customizedShoe, CustomizedShoeDto.class);
    }

    @Override
    public CustomizedShoe findById(int id) {
       return this.customizedShoeRepository.findById(id).orElseThrow(() -> new shoeNotFoundException("shoe not found"));

    }


    @Override
    public CustomizedShoe addShoe(CustomizedShoeDto newShoe, int shoeModelId) {
        ShoeModel shoeModel = this.shoeModelRepository.findById(shoeModelId).orElseThrow(() -> new shoeModelNotFounException("shoe model not found"));

        CustomizedShoe customizedShoe = this.mapper.map(newShoe, CustomizedShoe.class);
        customizedShoe.setStatus("available");
        customizedShoe.setShoeModel(shoeModel);
        CustomizedShoe save = this.customizedShoeRepository.save(customizedShoe);
        this.mapper.map(save, CustomizedShoeDto.class);
        return save;
    }

    @Override
    public CustomizedShoeDto editShoe(int id, CustomizedShoeDto editShoe) {
        CustomizedShoe oldCustomizedShoe = this.customizedShoeRepository.findById(id).orElseThrow(()-> new shoeNotFoundException("shoe not found"));
        oldCustomizedShoe.setPrice(editShoe.getPrice());
        oldCustomizedShoe.setDescription(editShoe.getDescription());
        oldCustomizedShoe.setImageUrl(editShoe.getImageUrl());
        CustomizedShoe save = this.customizedShoeRepository.save(oldCustomizedShoe);
        return this.mapper.map(save, CustomizedShoeDto.class);
    }

    @Override
    public List<CustomizedShoeDto> getShoeByShoeModel(int shoeModelId) {
        ShoeModel shoeModel = this.shoeModelRepository.findById(shoeModelId).orElseThrow(() -> new shoeModelNotFounException("Shoe Model not found"));
        List<CustomizedShoe> customizedShoes = this.customizedShoeRepository.getShoeByShoeModel(shoeModel);
        List<CustomizedShoeDto> getShoeByShoeModel = customizedShoes.stream().map(shoe -> this.mapper.map(shoe, CustomizedShoeDto.class)).collect(Collectors.toList());
        return getShoeByShoeModel;
    }



    @Override
    public CustomizedShoe deleteShoe(int id) {
        CustomizedShoe customizedShoe = this.customizedShoeRepository.findById(id).orElseThrow(() -> new shoeNotFoundException("shoe not found"));
        customizedShoe.setStatus("unavailble");
        CustomizedShoe save = this.customizedShoeRepository.save(customizedShoe);
        return save;
    }
    private CustomizedShoeDto toDto(CustomizedShoe customizedShoe){
        CustomizedShoeDto st = new CustomizedShoeDto();
        st.setId(customizedShoe.getId());
        st.setDescription(customizedShoe.getDescription());
        st.setPrice(customizedShoe.getPrice());
        st.setImageUrl(customizedShoe.getImageUrl());
        st.setStatus(customizedShoe.getStatus());
        ShoeModelDto smdt = new ShoeModelDto();
        smdt.setId(customizedShoe.getShoeModel().getId());
        smdt.setModelname(customizedShoe.getShoeModel().getModelname());
//        smdt.setImageurl(customizedShoe.getShoeModel().getImageurl());
//        smdt.setPrice(customizedShoe.getShoeModel().getPrice());
        smdt.setStatus(customizedShoe.getShoeModel().getStatus());
//        smdt.setBrandDto(shoe.get);
        st.setShoeModelDto(smdt);
        return st;
    }

}
