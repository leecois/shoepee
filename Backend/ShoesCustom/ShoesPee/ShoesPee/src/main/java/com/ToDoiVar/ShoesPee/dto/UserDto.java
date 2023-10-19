package com.ToDoiVar.ShoesPee.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserDto {
    private int userId;
    private String username;
    private String password;
    private String email;


}
