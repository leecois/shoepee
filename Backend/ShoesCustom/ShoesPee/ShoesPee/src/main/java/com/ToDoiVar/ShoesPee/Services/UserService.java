package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.User;

import java.util.List;
public interface UserService {
    public List<User> getAllUser();
    public User createUser(User user);
    public User getUserById(Long id);
    public void removeUser(Long id);
    public User editUser(Long id,User newUser);
    public User fineUserByName(String name);

}
