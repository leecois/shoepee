package com.ToDoiVar.ShoesPee.repositiory;

import com.ToDoiVar.ShoesPee.Models.InforUser;
//import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InforUserRepository extends JpaRepository<InforUser,Integer> {


//    <List<InforUser> getInforUserById(int id);
        InforUser findInforUserByUser(User user);
}
