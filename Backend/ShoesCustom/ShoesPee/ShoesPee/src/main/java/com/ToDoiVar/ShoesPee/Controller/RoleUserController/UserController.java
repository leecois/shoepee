package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.ChangePasswordRequest;
import com.ToDoiVar.ShoesPee.Models.Role;
import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.Security.changepass.PasswordRequestUtil;
import com.ToDoiVar.ShoesPee.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")

public class UserController {
    @Autowired
    private UserService userService;
//    @GetMapping("/users")
//    public List<User> getALlUser(){
//        return userService.getAllUser();
//    }
//    @GetMapping("/getuserbyid/{id}")
//    public Optional<User> getUserById(@PathVariable int id){
//        return userService.getUserById(id);
//    }
    @GetMapping("/existuser/{email}")
    public ResponseEntity<User> checkExistedEmail(@PathVariable String email){
        return new ResponseEntity<>(userService.getUserByEmail(email),HttpStatus.OK);
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
    @GetMapping("/isadmin/{name}")
    public Boolean isAdmin(@PathVariable String name){
        User user = userService.getUserByName(name);
        String role = String.valueOf(user.getRole());
        return role.equals("ADMIN");
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody PasswordRequestUtil requestUtil){
        User user = userService.findByEmail(requestUtil.getEmail()).get();
        if (!userService.oldPasswordIsValid(user, requestUtil.getOldPassword())){
            return new ResponseEntity<>("Incorrect Old Password",HttpStatus.BAD_REQUEST);
        }
        userService.changePassword(user, requestUtil.getNewPassword());
        return new ResponseEntity<>("Password changed successfully",HttpStatus.OK);
    }
}
