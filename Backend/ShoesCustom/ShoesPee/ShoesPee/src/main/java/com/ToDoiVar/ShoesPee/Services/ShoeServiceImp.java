package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Exeption.shoeNotFoundException;
import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import com.ToDoiVar.ShoesPee.repositiory.ShoeModelRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShoeServiceImp implements ShoeService{
    @Autowired
    private ShoeRepository shoeRepository;
    @Autowired
    public ModelMapper mapper;
    @Autowired
    public ShoeModelRepository shoeModelRepository;
    @Override
    public List<ShoeDto> getAllShoe() {
        List<Shoe> allShoe =  this.shoeRepository.findAll();
        List<ShoeDto> getALlShoe = allShoe.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
        return getALlShoe;
    }

    @Override
    public ShoeDto getShoeById(int id) {
        Shoe shoe =  this.shoeRepository.findById(id).orElseThrow(() -> new shoeNotFoundException("Shoe not found"));
        return this.mapper.map(shoe,ShoeDto.class);
    }

    @Override
    public Shoe findById(int id) {
       return this.shoeRepository.findById(id).orElseThrow(() -> new shoeNotFoundException("shoe not found"));

    }


    @Override
    public ShoeDto addShoe(ShoeDto newShoe) {
        Shoe shoe = this.mapper.map(newShoe,Shoe.class);
        Shoe save = this.shoeRepository.save(shoe);
        return this.mapper.map(save,ShoeDto.class);
    }

    @Override
    public ShoeDto editShoe(int id, ShoeDto editShoe) {
        Shoe oldShoe = this.shoeRepository.findById(id).orElseThrow(()-> new shoeNotFoundException("shoe not found"));
        oldShoe.setPrice(editShoe.getPrice());
        oldShoe.setDescription(editShoe.getDescription());
        oldShoe.setImageUrl(editShoe.getImageUrl());
        Shoe save = this.shoeRepository.save(oldShoe);
        return this.mapper.map(save,ShoeDto.class);
    }

    @Override
    public List<ShoeDto> getShoeByShoeModel(int shoeModelId) {
        ShoeModel shoeModel = this.shoeModelRepository.findById(shoeModelId).orElseThrow(() -> new shoeModelNotFounException("Shoe Model not found"));
        List<Shoe>  shoes = this.shoeRepository.getShoeByShoeModel(shoeModel);
        List<ShoeDto> getShoeByShoeModel = shoes.stream().map(shoe -> this.mapper.map(shoe,ShoeDto.class)).collect(Collectors.toList());
        return getShoeByShoeModel;
    }



    @Override
    public void deleteShoe(int id) {
        if (!shoeRepository.existsById(id)){
            throw new shoeNotFoundException("shoe not found");
        }
        shoeRepository.deleteById(id);
    }
    private ShoeDto toDto(Shoe shoe){
        ShoeDto st = new ShoeDto();
        st.setId(shoe.getId());
        st.setDescription(shoe.getDescription());
        st.setPrice(shoe.getPrice());
        st.setImageUrl(shoe.getImageUrl());
        ShoeModelDto smdt = new ShoeModelDto();
        smdt.setId(shoe.getShoeModel().getId());
        smdt.setModelname(shoe.getShoeModel().getModelname());
        smdt.setImageurl(shoe.getShoeModel().getImageurl());
        smdt.setPrice(shoe.getShoeModel().getPrice());
//        smdt.setBrandDto(shoe.get);
        st.setShoeModelDto(smdt);
        return st;
    }

}
