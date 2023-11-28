package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.BrandExistedException;
import com.ToDoiVar.ShoesPee.Exeption.BrandNotFoundException;
import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.CustomizedShoe;
import com.ToDoiVar.ShoesPee.dto.BrandDto;
import com.ToDoiVar.ShoesPee.dto.CustomizedShoeDto;
import com.ToDoiVar.ShoesPee.repositiory.BrandRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BrandServiceImp implements BrandService{
    @Autowired
    public BrandRepository brandRepository;
    @Autowired
    public ModelMapper mapper;



    @Override
    public List<Brand> getAllBrand(String searchKey) {
        if (searchKey.equals("")) {
            List<Brand> getAllBrand = brandRepository.findAll();
//            List<CustomizedShoeDto> getAllCustomizedShoeDto = getAllCustomizedShoe.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
            return getAllBrand;
        } else {
            List<Brand> getAllCustomized = brandRepository.findBrandByBrandNameContainingIgnoreCase(searchKey);
//            List<CustomizedShoeDto> getAllShoemodelDto = getAllCustomized.stream().map(shoe -> this.toDto(shoe)).collect(Collectors.toList());
            return getAllCustomized;
        }
    }

//    @Override
//    public List<Brand> getAll() {
//        return this.brandRepository.findAll();
//    }

    @Override
    public BrandDto getBrandById(int id) {
        Brand brand =  this.brandRepository.findById(id).orElseThrow(() -> new BrandNotFoundException("This brand does not exist"));
        return this.mapper.map(brand,BrandDto.class);
    }

    @Override
    public BrandDto getBrandByName(String name) {
        Brand brand = this.brandRepository.getBrandByBrandName(name).orElseThrow(() ->new BrandNotFoundException("This brand does not exist"));
        return  this.mapper.map(brand,BrandDto.class);
    }

    @Override
    public BrandDto addBrand(BrandDto newBrand) {
        if(BrandExisted(newBrand.getBrandName())){
            throw new BrandExistedException("Sorry, this brand has been exist");
        }
        Brand brand = this.mapper.map(newBrand,Brand.class);
        brand.setStatus("available");
        Brand save = this.brandRepository.save(brand);

        return this.mapper.map(save,BrandDto.class);
    }

    private boolean BrandExisted(String brandName) {
        return brandRepository.getBrandByBrandName(brandName).isPresent();
    }

    @Override
    public Brand deleteBrand(int id) {
        Brand deleBrand = this.brandRepository.findById(id).orElseThrow(() -> new BrandNotFoundException("Brand not found"));
        deleBrand.setStatus("unavailable");
        Brand save = this.brandRepository.save(deleBrand);
        return save;
    }

    @Override
    public BrandDto editBrand(int id, BrandDto editBrand) {
       Brand oldBrand = this.brandRepository.findById(id).orElseThrow(() -> new BrandNotFoundException("Brand not found"));
       oldBrand.setBrandName(editBrand.getBrandName());
       oldBrand.setImageUrl(editBrand.getImageUrl());
       Brand save =  this.brandRepository.save(oldBrand);
       return this.mapper.map(save,BrandDto.class);
    }
    public BrandDto toDto(Brand brand){
        BrandDto bt = new BrandDto();
        bt.setId(brand.getId());
        bt.setBrandName(brand.getBrandName());
        bt.setImageUrl(brand.getImageUrl());
        bt.setStatus(brand.getStatus());
        return bt;
    }
}
