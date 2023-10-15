package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.User;

import java.util.List;
public interface UserService {
    public List<User> getAllUser();
    public User createUser(User user);
    public User getUserById(int id);
    public void removeUser(int id);
    public User editUser(int id,User newUser);
    public User fineUserByName(String name);

}
