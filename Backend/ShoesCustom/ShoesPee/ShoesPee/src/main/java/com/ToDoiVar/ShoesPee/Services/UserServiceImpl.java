package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.dto.LoginDto;
import com.ToDoiVar.ShoesPee.dto.UserDto;
import com.ToDoiVar.ShoesPee.payload.response.LoginMesage;
import com.ToDoiVar.ShoesPee.repositiory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(int id) {
       return userRepository.findById(id).get();
    }

    @Override
    public void removeUser(int id) {
        User user = userRepository.findById(id).get();
        if(user != null){
            userRepository.delete(user);
        }
    }
    public User editUser(int id,User newUser){
        Optional<User> updateuser = Optional.of(userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setPassword(newUser.getPassword());
            user.setAddress(newUser.getAddress());
            user.setPhone(newUser.getPhone());
//            user.setRoleId(newUser.getRoleId());
            return userRepository.save(newUser);
        }).orElseGet(() -> {
            newUser.setUserId(id);
            return userRepository.save(newUser);
        }));

        return newUser;
    }

    @Override
    public User fineUserByName(String name) {
        return userRepository.findByUsername(name);
    }

    @Override
    public String addUser(UserDto userDto) {
        User user = new User(
                userDto.getUserId(),
                userDto.getUsername(),
                this.passwordEncoder.encode(userDto.getPassword()),
                userDto.getEmail(),
                userDto.getAddress(),
                userDto.getPhone(),
                "USER"
        );
        userRepository.save(user);
        return user.getEmail();
    }

    @Override
    public LoginMesage loginUser(LoginDto loginDto) {
        String msg = "";
        User user1 = userRepository.findByUsername(loginDto.getUsername());
        if(user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password,encodedPassword);
            if(isPwdRight) {
                Optional<User> user = userRepository.findByUsernameAndPassword(loginDto.getUsername(),encodedPassword);
                if (user.isPresent()) {
                    return new LoginMesage("Login Success",true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {
                return new LoginMesage("password Not Match ",false);
            }
            } else {
            return new LoginMesage("Username not exist",false);
        }
    }


}
