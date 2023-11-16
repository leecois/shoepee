package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Exeption.SizeException;
import com.ToDoiVar.ShoesPee.Exeption.shoeModelNotFounException;
import com.ToDoiVar.ShoesPee.Exeption.userNotFoundException;
import com.ToDoiVar.ShoesPee.Models.InforUser;
//import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.repositiory.InforUserRepository;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InforUserServiceImp implements InforUserService {
    @Autowired
    private InforUserRepository inforUserRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;


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

    @Override
    public InforUser addInforUser(InforUser inforUser, int userId) {
        User user = userService.getUserById(userId)
                .orElseThrow(() -> new userNotFoundException("User not found"));

        // Check if the user already has InforUser
        if (user.getInforUser() != null) {
            throw new IllegalStateException("This user already has an associated InforUser");
        }

        inforUser.setUser(user);
        user.setInforUser(inforUser); // Set the InforUser to the user as well
        inforUserRepository.save(inforUser);
        userRepository.save(user); // Ensure that the user repository is also updated

        return inforUser;

    }


}
