package com.ToDoiVar.ShoesPee.Models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.ToDoiVar.ShoesPee.Models.Permission.*;

@RequiredArgsConstructor
public enum Role {
    USER,
    ADMIN,

    MANAGER



//    public List<SimpleGrantedAuthority> getAuthorities() {
//        var authorities = getPermissions()
//        .stream()
//        .map(permission -> new SimpleGrantedAuthority(permission.name()))
//                .collect(Collectors.toList());
//        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
//        return authorities;
//    }

}
