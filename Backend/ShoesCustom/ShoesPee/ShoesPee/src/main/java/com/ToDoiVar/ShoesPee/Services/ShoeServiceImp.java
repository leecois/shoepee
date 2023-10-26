package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.shoeNotFoundException;
import com.ToDoiVar.ShoesPee.Models.Shoe;
import com.ToDoiVar.ShoesPee.repositiory.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoeServiceImp implements ShoeService{
    @Autowired
    private ShoeRepository shoeRepository;
    @Override
    public List<Shoe> getAllShoe() {
        return shoeRepository.findAll();
    }

    @Override
    public Shoe getShoeById(int id) {
        return shoeRepository.findById(id).orElseThrow(() -> new shoeNotFoundException("Shoe not found"));
    }


    @Override
    public Shoe addShoe(Shoe newShoe) {
        return shoeRepository.save(newShoe);
    }

    @Override
    public Shoe editShoe(int id, Shoe editShoe) {
        return shoeRepository.findById(id).map(shoe -> {
            shoe.setModelId(editShoe.getModelId());
            shoe.setImageUrl(editShoe.getImageUrl());
            shoe.setDescription(editShoe.getDescription());
            shoe.setPrice(editShoe.getPrice());
            return shoeRepository.save(shoe);

        }).orElseThrow(() -> new shoeNotFoundException("shoe not found"));
    }

    @Override
    public Optional<List<Shoe>> getShoeByShoeModelId(int shoemodelId) {
        return shoeRepository.getShoeByModelId(shoemodelId);
    }

    @Override
    public void deleteShoe(int id) {
        if (!shoeRepository.existsById(id)){
            throw new shoeNotFoundException("shoe not found");
        }
        shoeRepository.deleteById(id);
    }
}
