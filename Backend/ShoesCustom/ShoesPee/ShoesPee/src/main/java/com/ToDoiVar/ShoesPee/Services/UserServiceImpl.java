package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
       return userRepository.findById(id).get();
    }

    @Override
    public void removeUser(Long id) {
        User user = userRepository.findById(id).get();
        if(user != null){
            userRepository.delete(user);
        }
    }
    public User editUser(Long id,User newUser){
        Optional<User> updateuser = Optional.of(userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setPassword(newUser.getPassword());
            user.setAddress(newUser.getAddress());
            user.setPhone(newUser.getPhone());
            user.setRoleId(newUser.getRoleId());
            return userRepository.save(newUser);
        }).orElseGet(() -> {
            newUser.setUserId(id);
            return userRepository.save(newUser);
        }));

        return newUser;
    }

    @Override
    public User fineUserByName(String name) {
        return userRepository.findByUsername(name);
    }


}
