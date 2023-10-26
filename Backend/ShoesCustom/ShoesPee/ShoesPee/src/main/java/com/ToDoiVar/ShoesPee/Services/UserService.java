package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.dto.LoginDto;
import com.ToDoiVar.ShoesPee.dto.UserDto;
import com.ToDoiVar.ShoesPee.payload.response.LoginMesage;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
public interface UserService {
    public List<User> getAllUser();
    public User getUserById(int id);
    public void removeUser(int id);
    public User editUser(int id,User newUser);
    public User fineUserByName(String name);
    String addUser(UserDto userDto);
    LoginMesage loginUser(LoginDto loginDto);
}
