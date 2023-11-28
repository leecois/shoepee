package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.BrandNotFoundException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelExistedException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
import com.ToDoiVar.ShoesPee.Models.ShoeModel;
import com.ToDoiVar.ShoesPee.dto.BrandDto;
import com.ToDoiVar.ShoesPee.dto.CustomizedShoeDto;
import com.ToDoiVar.ShoesPee.dto.ShoeModelDto;
import com.ToDoiVar.ShoesPee.repositiory.BrandRepository;
import com.ToDoiVar.ShoesPee.repositiory.ShoeModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ShoeModelServiceImpl implements ShoeModelService{
    @Autowired
    private ShoeModelRepository shoeModelRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Override
    public ShoeModel addShoeModel(ShoeModelDto newShoeModel) {
        if(shoeModelExisted(newShoeModel.getModelname())){
            throw new shoeModelExistedException(newShoeModel.getModelname() + "ShoeModel has been existed");
        }
        Brand brand= this.brandRepository.getBrandByBrandName(newShoeModel.getBrandDto().getBrandName()).orElseThrow(()-> new BrandNotFoundException("Brand not found"));
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
    public ShoeModel updateShoeModel(int id, ShoeModelDto updateShoeModel) {
        ShoeModel existingShoeModel = shoeModelRepository.findById(id)
                .orElseThrow(() -> new shoeModelNotFounException("ShoeModel with id " + id + " not found"));
        ShoeModelDto getShoe = toDto(existingShoeModel);

        existingShoeModel.setModelname(updateShoeModel.getModelname());
        // ... cập nhật các trường khác của ShoeModel nếu cần ...

        // Kiểm tra xem updateShoeModelData có chứa thông tin Brand không
        if (updateShoeModel.getBrandDto() != null && updateShoeModel.getBrandDto().getBrandName() != null) {
            // Giả sử getId() trả về id của Brand
            String brandName = updateShoeModel.getBrandDto().getBrandName();
            Brand brand = brandRepository.getBrandByBrandName(brandName)
                    .orElseThrow(() -> new BrandNotFoundException("Brand with id " + brandName + " not found"));
            existingShoeModel.setBrand(brand);
        }

        return shoeModelRepository.save(existingShoeModel);
    }

    @Override
    public ShoeModel removeShoeModel(int id) {
        ShoeModel shoeModel = this.shoeModelRepository.findById(id).orElseThrow(()-> new shoeModelNotFounException("shoe model not found"));
        shoeModel.setStatus("unavailable");
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
//        sm.setImageurl(shoeModelDto.getImageurl());
//        sm.setPrice(shoeModelDto.getPrice());
        sm.setStatus(shoeModelDto.getStatus());
        return sm;
    }
    private ShoeModelDto toDto(ShoeModel shoeModel){
        ShoeModelDto sto = new ShoeModelDto();
        sto.setId(shoeModel.getId());
//        sto.setBrandId(shoeModel.getBrandId());
        sto.setModelname(shoeModel.getModelname());
//        sto.setImageurl(shoeModel.getImageurl());
//        sto.setPrice(shoeModel.getPrice());
        sto.setStatus(shoeModel.getStatus());
        BrandDto brandDto = new BrandDto();
        brandDto.setId(shoeModel.getBrand().getId());
        brandDto.setBrandName(shoeModel.getBrand().getBrandName());
        brandDto.setImageUrl(shoeModel.getBrand().getImageUrl());
        brandDto.setStatus(shoeModel.getBrand().getStatus());
        sto.setBrandDto(brandDto);
        List<CustomizedShoeDto> CustomizedShoeDtos = new ArrayList<>();
        for (CustomizedShoe customizedShoe : shoeModel.getCustomizedShoes()
             ) {
            CustomizedShoeDto customizedShoeDto = new CustomizedShoeDto();
            customizedShoeDto.setId(customizedShoe.getId());
            customizedShoeDto.setShoeQuantity(customizedShoe.getShoeQuantity());
            customizedShoeDto.setName(customizedShoe.getName());
            customizedShoeDto.setStock(customizedShoe.isStock());
            customizedShoeDto.setDescription(customizedShoe.getDescription());
            customizedShoeDto.setPrice(customizedShoe.getPrice());
            customizedShoeDto.setImageUrl(customizedShoe.getImageUrl());
            customizedShoeDto.setStatus(customizedShoe.getStatus());
            CustomizedShoeDtos.add(customizedShoeDto);
        }
        sto.setShoes(CustomizedShoeDtos);
//        Brand brandDto = new Brand();
////        brandDto.setId(shoeModel.getBrand().getId());
//        brandDto.setBrandName(shoeModel.getBrand().getBrandName());
//        brandDto.setImageUrl(shoeModel.getBrand().getImageUrl());
//        sto.setBrand(brandDto);
        return sto;
    }
    private CustomizedShoeDto ShoeToDto(CustomizedShoe customizedShoe){
        CustomizedShoeDto st = new CustomizedShoeDto();
        st.setId(customizedShoe.getId());
        st.setName(customizedShoe.getName());
        st.setStock(customizedShoe.isStock());
        st.setShoeQuantity(customizedShoe.getShoeQuantity());
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
