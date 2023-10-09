package com.ToDoiVar.ShoesPee.Controller;

import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.Services.UserService;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/shoepee")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/user")
    public List<User> getUsers(){

        return userService.readAll();
    }
    @PostMapping("/saveUser")
     public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return  userService.getUserById(id);
    }
    @DeleteMapping("/removeUser/{id}")
    public ResponseEntity<HttpStatus> deleteUser( @PathVariable Long id){
        userService.removeUser(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
    @Autowired
    public UserRepository userRepository;
    @PutMapping("/updateuser/{id}")

    public ResponseEntity<User> updateUser(@RequestBody User newUser,@PathVariable Long id){
            User updateUser = userRepository.findById(id).map(user -> {
                user.setUserName(newUser.getUserName());
                user.setPassword(newUser.getPassword());
                user.setAddress(newUser.getAddress());
                user.setPhone(newUser.getPhone());
                user.setRoleId(newUser.getRoleId());
                return userRepository.save(newUser);
            }).orElseGet(() -> {
                newUser.setUserId(id);
                return userRepository.save(newUser);
            });
            return ResponseEntity.ok(updateUser);

    }
}
