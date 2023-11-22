package com.ToDoiVar.ShoesPee.Controller.RoleAdminController;

import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class UserManageController {
    @Autowired
    private UserService userService;
    @GetMapping("/users")
    public ResponseEntity<List<User>> getALlUser(){
        List<User>  user = this.userService.getAllUser();
        return new ResponseEntity<List<User>>(user, HttpStatus.OK);
    }
    @GetMapping("/getuserbyid/{id}")
    public Optional<User> getUserById(@PathVariable int id){
        return userService.getUserById(id);
    }
    @DeleteMapping("/deleteuser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        userService.removeUser(id);
        return new ResponseEntity<String>("Delete sucessful",HttpStatus.OK);
    }
    @PutMapping("/edituser/{id}")
    public ResponseEntity<User> editUser(@PathVariable int id,@RequestBody User newUser){
        return new ResponseEntity<User>(userService.editUser(id,newUser),HttpStatus.OK);
    }
    @GetMapping("/username/{name}")
    public  ResponseEntity<User> getUserByName(@PathVariable String name){
        User user = userService.getUserByName(name);
        if(user == null){
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new  ResponseEntity<>(user,HttpStatus.OK);
    }
    @GetMapping("/existuser/{email}")
    public ResponseEntity<User> checkExistedEmail(@PathVariable String email){
        return new ResponseEntity<>(userService.getUserByEmail(email),HttpStatus.OK);
    }

//    @PostMapping(path = "/save")
//    public String saveEmployee(@RequestBody UserDto userDto)
//    {
//        String id = userService.addUser(userDto);
//        return id;
//    }

//    @PostMapping(path ="/login")
//    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
//        LoginMesage loginMesage = userService.loginUser(loginDto);
//        return ResponseEntity.ok(loginMesage);
//    }
}
