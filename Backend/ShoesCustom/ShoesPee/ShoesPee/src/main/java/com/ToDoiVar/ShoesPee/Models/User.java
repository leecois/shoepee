package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "tbluser")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userid")
    private long userId;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;
    @Column(name = "address")
    private String address;
    @Column(name = "phone")
    private String phone;
    @Column(name = "roleid")
    private int roleId;
    @Column(name = "rolename")
    private String roleName;

//    public User(String userName, String passWord, String email, String address, String phone, int roleId) {
//        this.userName = userName;
//        this.password = passWord;
//        this.email = email;
//        this.address = address;
//        this.phone = phone;
//        this.roleId = roleId;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public void setUserId(long userId) {
//        this.userId = userId;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public void setRoleId(int roleId) {
//        this.roleId = roleId;
//    }
}
