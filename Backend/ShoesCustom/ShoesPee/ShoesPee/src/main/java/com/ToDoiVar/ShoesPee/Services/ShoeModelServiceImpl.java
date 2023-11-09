package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.BrandNotFoundException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelExistedException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.dto.BrandDto;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import com.ToDoiVar.ShoesPee.repositiory.BrandRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShoeModelServiceImpl implements ShoeModelService{
    @Autowired
    private ShoeModelRepository shoeModelRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Override
    public ShoeModelDto addShoeModel(ShoeModelDto newShoeModel,int brandid) {
        if(shoeModelExisted(newShoeModel.getModelname())){
            throw new shoeModelExistedException(newShoeModel.getModelname() + "ShoeModel has been existed");
        }
        Brand brand= this.brandRepository.findById(brandid).orElseThrow(()-> new BrandNotFoundException("Brand not found"));
        //ShoeModelDto to shoemodel
        ShoeModel entity = toEntity(newShoeModel);
        entity.setBrand(brand);
        ShoeModel save = this.shoeModelRepository.save(entity);
        //shoemodel to shoemodelDto
        ShoeModelDto dto = toDto(save);

        return dto;
    }

    @Override
    public List<ShoeModelDto> getAllShoeModel() {
        List<ShoeModel> getAllShoemodel = shoeModelRepository.findAll();
        List<ShoeModelDto> getAllShoemodelDto =getAllShoemodel.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
        return getAllShoemodelDto;
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
    public void removeShoeModel(int id) {
        if(!shoeModelRepository.existsById(id)){
            throw new shoeModelNotFounException("Sorry, this shoemodel could be not found");
        }
        shoeModelRepository.deleteById(id);
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
        return sm;
    }
    private ShoeModelDto toDto(ShoeModel shoeModel){
        ShoeModelDto sto = new ShoeModelDto();
        sto.setId(shoeModel.getId());
//        sto.setBrandId(shoeModel.getBrandId());
        sto.setModelname(shoeModel.getModelname());
        sto.setImageurl(shoeModel.getImageurl());
        sto.setPrice(shoeModel.getPrice());
        BrandDto brandDto = new BrandDto();
        brandDto.setId(shoeModel.getBrand().getId());
        brandDto.setBrandName(shoeModel.getBrand().getBrandName());
        brandDto.setImageUrl(shoeModel.getBrand().getImageUrl());
        brandDto.setStatus(shoeModel.getBrand().getStatus());
        sto.setBrandDto(brandDto);
//        Brand brandDto = new Brand();
////        brandDto.setId(shoeModel.getBrand().getId());
//        brandDto.setBrandName(shoeModel.getBrand().getBrandName());
//        brandDto.setImageUrl(shoeModel.getBrand().getImageUrl());
//        sto.setBrand(brandDto);
        return sto;
    }
}
