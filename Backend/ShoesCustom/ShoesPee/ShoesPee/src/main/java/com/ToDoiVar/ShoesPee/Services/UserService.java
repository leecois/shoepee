package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.ChangePasswordRequest;
import com.ToDoiVar.ShoesPee.Models.User;
import com.ToDoiVar.ShoesPee.token.VerificationToken;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

public interface UserService {
     List<User> getAllUser();
    Optional<User> findByEmail(String email);
     Optional<User> getUserById(int id);
     void removeUser(int id);
     User editUser(int id,User newUser);
     User getUserByName(String name);
//    String addUser(UserDto userDto);
    User getUserByEmail(String email);
    User getRoleUser(String name);


    VerificationToken generateNewVerificationToken(String oldToken);
    void changePassword(User theUser, String newPassword);

    String validatePasswordResetToken(String token);

    User findUserByPasswordToken(String token);

    void createPasswordResetTokenForUser(User user, String passwordResetToken);

    boolean oldPasswordIsValid(User user, String oldPassword);


//    LoginMesage loginUser(LoginDto loginDto);
}
