package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.SizeException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelExistedException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Models.Size;
import com.ToDoiVar.ShoesPee.repositiory.SizeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SizeServiceImp implements SizeService{
    @Autowired
    private SizeRepository sizeRepository;
    @Override
    public Size addSize(Size size) {
        if(SizeExisted(size.getSize())){
            throw new shoeModelExistedException(size.getSize() + "Size has been existed");
        }
        return sizeRepository.save(size);
    }


    @Override
    public Size getSizeById(int id) {
        return sizeRepository.findById(id).orElseThrow(() -> new SizeException("Sorry, no size found with the Id: " + id));
    }

    @Override
    public List<Size> getAllSize() {
        return sizeRepository.findAll();
    }

    private boolean SizeExisted(int size) {
        return sizeRepository.getSizesBySize(size).isPresent();
    }
}
