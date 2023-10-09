package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> readAll() {
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
       return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User is not exist"));
    }

    @Override
    public void removeUser(Long id) {
        User existingUser = getUserById(id);
        userRepository.delete(existingUser);
    }


}
