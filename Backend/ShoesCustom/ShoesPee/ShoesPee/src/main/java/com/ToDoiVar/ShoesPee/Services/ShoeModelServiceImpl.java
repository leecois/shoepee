package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.BrandNotFoundException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelExistedException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.dto.BrandDto;
import com.ToDoiVar.ShoesPee.dto.ShoeDto;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import com.ToDoiVar.ShoesPee.repositiory.BrandRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ShoeModelServiceImpl implements ShoeModelService{
    @Autowired
    private ShoeModelRepository shoeModelRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Override
    public ShoeModel addShoeModel(ShoeModelDto newShoeModel,int brandid) {
        if(shoeModelExisted(newShoeModel.getModelname())){
            throw new shoeModelExistedException(newShoeModel.getModelname() + "ShoeModel has been existed");
        }
        Brand brand= this.brandRepository.findById(brandid).orElseThrow(()-> new BrandNotFoundException("Brand not found"));
        //ShoeModelDto to shoemodel
        ShoeModel entity = toEntity(newShoeModel);
        entity.setStatus("available");
        entity.setBrand(brand);
        ShoeModel save = this.shoeModelRepository.save(entity);
        //shoemodel to shoemodelDto
        ShoeModelDto dto = toDto(save);

        return save;
    }

    @Override
    public List<ShoeModelDto> getAllShoeModel(String searchKey) {
        if (searchKey.equals("")){
            List<ShoeModel> getAllShoemodel = shoeModelRepository.findAll();
            List<ShoeModelDto> getAllShoemodelDto =getAllShoemodel.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
            return getAllShoemodelDto;
        }
        else {
           List<ShoeModel> getAllModel= shoeModelRepository.findShoeModelByModelnameContainingIgnoreCase(searchKey);
            List<ShoeModelDto> getAllShoemodelDto =getAllModel.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
            return getAllShoemodelDto;
        }


    }

    @Override
    public ShoeModel getShoeModelById(int id) {
        return shoeModelRepository.findById(id).orElseThrow(() -> new shoeModelNotFounException("Sorry, no shoe model found with the Id: " + id));
    }

    @Override
    public ShoeModel updateShoeModel(int id, ShoeModel updateShoeModel) {
       return shoeModelRepository.findById(id).map(sm -> {
            sm.setImageurl(updateShoeModel.getImageurl());
            sm.setModelname(updateShoeModel.getModelname());
//            sm.setBrandId(updateShoeModel.getBrandId());
            return shoeModelRepository.save(sm);
        }).orElseThrow(() -> new shoeModelNotFounException("Sorry, this shoemodel could be not found"));

    }

    @Override
    public ShoeModel removeShoeModel(int id) {
        ShoeModel shoeModel = this.shoeModelRepository.findById(id).orElseThrow(()-> new shoeModelNotFounException("shoe model not found"));
        shoeModel.setStatus("unavailble");
        ShoeModel save = this.shoeModelRepository.save(shoeModel);
        return save;
    }

    @Override
    public ShoeModel getShoeModelByName(String name) {
        return shoeModelRepository.getShoeModelsByModelname(name).orElseThrow(() -> new shoeModelNotFounException("Sorry, this shoemodel could be not found"));
    }

    @Override
    public List<ShoeModelDto> getShoeModelByBrand(int id) {
       Brand brand = this.brandRepository.findById(id).orElseThrow(()-> new BrandNotFoundException("Brand not found"));
        List<ShoeModel> findShoeModelByBrand = this.shoeModelRepository.findShoeModelByBrand(brand);
        List<ShoeModelDto> getShoe = findShoeModelByBrand.stream().map(shoe -> toDto(shoe)).collect(Collectors.toList());
        return getShoe;
    }



    private boolean shoeModelExisted(String modelName) {
        return shoeModelRepository.getShoeModelsByModelname(modelName).isPresent();
    }
    private ShoeModel toEntity(ShoeModelDto shoeModelDto){
        ShoeModel sm = new ShoeModel();
        sm.setId(shoeModelDto.getId());
//        sm.setBrandId(shoeModelDto.getBrandId());
        sm.setModelname(shoeModelDto.getModelname());
        sm.setImageurl(shoeModelDto.getImageurl());
        sm.setPrice(shoeModelDto.getPrice());
        sm.setStatus(shoeModelDto.getStatus());
        return sm;
    }
    private ShoeModelDto toDto(ShoeModel shoeModel){
        ShoeModelDto sto = new ShoeModelDto();
        sto.setId(shoeModel.getId());
//        sto.setBrandId(shoeModel.getBrandId());
        sto.setModelname(shoeModel.getModelname());
        sto.setImageurl(shoeModel.getImageurl());
        sto.setPrice(shoeModel.getPrice());
        sto.setStatus(shoeModel.getStatus());
        BrandDto brandDto = new BrandDto();
        brandDto.setId(shoeModel.getBrand().getId());
        brandDto.setBrandName(shoeModel.getBrand().getBrandName());
        brandDto.setImageUrl(shoeModel.getBrand().getImageUrl());
        brandDto.setStatus(shoeModel.getBrand().getStatus());
        sto.setBrandDto(brandDto);
        List<ShoeDto> shoeDtos = new ArrayList<>();
        for (Shoe shoe: shoeModel.getShoes()
             ) {
            ShoeDto shoeDto = new ShoeDto();
            shoeDto.setId(shoe.getId());
            shoeDto.setDescription(shoe.getDescription());
            shoeDto.setPrice(shoe.getPrice());
            shoeDto.setImageUrl(shoe.getImageUrl());
            shoeDto.setStatus(shoe.getStatus());
            shoeDtos.add(shoeDto);
        }
        sto.setShoes(shoeDtos);
//        Brand brandDto = new Brand();
////        brandDto.setId(shoeModel.getBrand().getId());
//        brandDto.setBrandName(shoeModel.getBrand().getBrandName());
//        brandDto.setImageUrl(shoeModel.getBrand().getImageUrl());
//        sto.setBrand(brandDto);
        return sto;
    }
    private ShoeDto ShoeToDto(Shoe shoe){
        ShoeDto st = new ShoeDto();
        st.setId(shoe.getId());
        st.setDescription(shoe.getDescription());
        st.setPrice(shoe.getPrice());
        st.setImageUrl(shoe.getImageUrl());
        st.setStatus(shoe.getStatus());
        ShoeModelDto smdt = new ShoeModelDto();
        smdt.setId(shoe.getShoeModel().getId());
        smdt.setModelname(shoe.getShoeModel().getModelname());
        smdt.setImageurl(shoe.getShoeModel().getImageurl());
        smdt.setPrice(shoe.getShoeModel().getPrice());
        smdt.setStatus(shoe.getShoeModel().getStatus());
//        smdt.setBrandDto(shoe.get);
        st.setShoeModelDto(smdt);
        return st;
    }
}
