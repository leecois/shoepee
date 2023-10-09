package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.Brand;
import com.ToDoiVar.ShoesPee.Models.User;
import org.springframework.stereotype.Service;

import java.util.List;
public interface UserService {
    public List<User> readAll();
    User saveUser(User user);
    User getUserById(Long id);
    void removeUser(Long id);
}
