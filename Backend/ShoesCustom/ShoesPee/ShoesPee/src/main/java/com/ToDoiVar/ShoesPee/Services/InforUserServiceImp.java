package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.SizeException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Models.InforUser;
//import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.repositiory.InforUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InforUserServiceImp implements InforUserService {
    @Autowired
    private InforUserRepository inforUserRepository;

    @Override
    public List<InforUser> getAllInfor() {
        return inforUserRepository.findAll();
    }

    @Override
    public InforUser getInforUserById(int id) {
        return inforUserRepository.findById(id).orElseThrow(() -> new SizeException("Sorry, no infor found with the Id: " + id));
    }


    @Override
    public InforUser updateInforUser(int id, InforUser updateInforUser) {
        return inforUserRepository.findById(id).map(sm -> {
            sm.setFullname(updateInforUser.getFullname());
            sm.setAddress(updateInforUser.getAddress());
            sm.setPhone(updateInforUser.getPhone());
            return inforUserRepository.save(sm);
        }).orElseThrow(() -> new SizeException("Sorry, this Infor User could be not found"));

    }



}
