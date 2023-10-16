package com.ToDoiVar.ShoesPee.Controller;

import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.Services.UserService;
import com.ToDoiVar.ShoesPee.dto.LoginDto;
import com.ToDoiVar.ShoesPee.dto.UserDto;
import com.ToDoiVar.ShoesPee.payload.response.LoginMesage;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    @PostMapping("/createuser")
    public ResponseEntity<User> createUser(@RequestBody User newUser){
        return new ResponseEntity<User>(userService.createUser(newUser),HttpStatus.CREATED);
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> getALlUser(){
        return new ResponseEntity<List<User>>(userService.getAllUser(),HttpStatus.OK);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id){
        return new ResponseEntity<User>(userService.getUserById(id),HttpStatus.OK);
    }
    @GetMapping("/deleteuser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        userService.removeUser(id);
        return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
    }
    @PostMapping("/edituser/{id}")
    public ResponseEntity<User> editUser(@PathVariable int id,@RequestBody User newUser){
            return new ResponseEntity<User>(userService.editUser(id,newUser),HttpStatus.OK);
    }
    @GetMapping("/username/{name}")
    public  ResponseEntity<User> getUserByName(@PathVariable String name){
        User user = userService.fineUserByName(name);
        if(user == null){
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new  ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDto userDto)
    {
        String id = userService.addUser(userDto);
        return id;
    }

    @PostMapping(path ="/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginMesage loginMesage = userService.loginUser(loginDto);
        return ResponseEntity.ok(loginMesage);
    }
}
