package com.ToDoiVar.ShoesPee.Models;

import com.ToDoiVar.ShoesPee.Models.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.SimpleTimeZone;

@Getter
@Entity
@Table(name = "tbluser")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue
    @Column(name = "userid")
    private int userId;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;
    @Enumerated(EnumType.STRING)
    @JoinColumn()
    private Role role;

        @OneToOne(mappedBy = "user")
        @JsonIgnore
        private Cart cart;
        public Cart getCart() {
            return cart;
        }
        public void setCart(Cart cart) {
            this.cart = cart;
        }



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return List.of( new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }
    public String getUsername(){
        return email;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
