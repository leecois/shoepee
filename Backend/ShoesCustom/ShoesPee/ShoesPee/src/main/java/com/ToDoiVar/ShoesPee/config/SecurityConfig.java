//package com.ToDoiVar.ShoesPee.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//
//public class SecurityConfig {
//    @Bean
//    public UserDetailsService UserDetailsService() {
//        UserDetails user = User.builder()
//                .username("anxem")
//                .password("{bcrypt}$2a$10$ehzezIOu4ZElF4Li.ziqU.K5MrTSGjG7Qqq4g9zeYhCbYl6y.04IW")
//                .roles("USER")
//                .build();
//        UserDetails admin = User.builder()
//                .username("minh")
//                .password("{bcrypt}$2a$10$Da/SHb0YRIxIimrwal2Qy.lhMLae1jM6y3cCpxnKrZmUXz8syvWsm")
//                .roles("USER","ADMIN")
//                .build();
//        return new InMemoryUserDetailsManager(user,admin);
//    }
//}
