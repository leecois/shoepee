package com.ToDoiVar.ShoesPee.Services;

import com.ToDoiVar.ShoesPee.Models.InforUser;
//import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InforUserService {
    List<InforUser> getAllInfor();

    InforUser getInforUserById(int id);

    InforUser updateInforUser(int id,InforUser updateInforUser);
    InforUser addInforUser(InforUser inforUser,int userId);




}
