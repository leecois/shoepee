package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.User;

import java.util.List;
public interface UserService {
    public List<User> getAllUser();
    public User createUser(User user);
    User getUserById(Long id);
    void removeUser(Long id);
    User editUser(Long id,User newUser);
    

}
