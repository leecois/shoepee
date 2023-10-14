package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.shoeModelExistedException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.repositiory.ShoeModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ShoeModelServiceImpl implements ShoeModelService{
    @Autowired
    private ShoeModelRepository shoeModelRepository;
    @Override
    public ShoeModels addShoeModel(ShoeModels newShoeModels) {
        if(shoeModelExisted(newShoeModels.getModelName())){
            throw new shoeModelExistedException(newShoeModels.getModelName() + "ShoeModel has been existed");
        }
        return shoeModelRepository.save(newShoeModels);
    }

    @Override
    public List<ShoeModels> getAllShoeModel() {
        return shoeModelRepository.findAll();
    }

    @Override
    public ShoeModels getShoeModelById(Long id) {
        return shoeModelRepository.findById(id).orElseThrow(() -> new shoeModelNotFounException("Sorry, no shoe model found with the Id: " + id));
    }

    @Override
    public ShoeModels updateShoeModel(Long id, ShoeModels updateShoeModel) {
       return shoeModelRepository.findById(id).map(sm -> {
            sm.setImageUrl(updateShoeModel.getImageUrl());
            sm.setModelName(updateShoeModel.getModelName());
            sm.setBrandId(updateShoeModel.getBrandId());
            return shoeModelRepository.save(sm);
        }).orElseThrow(() -> new shoeModelNotFounException("Sorry, this shoemodel could be not found"));

    }

    @Override
    public void removeShoeModel(Long id) {
        if(!shoeModelRepository.existsById(id)){
            throw new shoeModelNotFounException("Sorry, this shoemodel could be not found");
        }
        shoeModelRepository.deleteById(id);
    }

    @Override
    public ShoeModels getShoeModelByName(String name) {
        return shoeModelRepository.getShoeModelsByModelName(name).orElseThrow(() -> new shoeModelNotFounException("Sorry, this shoemodel could be not found"));
    }
    private boolean shoeModelExisted(String modelName) {
        return shoeModelRepository.getShoeModelsByModelName(modelName).isPresent();
    }
}
