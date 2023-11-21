package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ChangePasswordRequest;
import com.ToDoiVar.ShoesPee.Models.User;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

public interface UserService {
     List<User> getAllUser();
     Optional<User> getUserById(int id);
     void removeUser(int id);
     User editUser(int id,User newUser);
     User getUserByName(String name);
//    String addUser(UserDto userDto);
    User getUserByEmail(String email);
    User getRoleUser(String name);

    void changePassword(ChangePasswordRequest request, Principal connectedUser);


//    LoginMesage loginUser(LoginDto loginDto);
}
