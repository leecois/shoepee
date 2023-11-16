package com.ToDoiVar.ShoesPee.Controller.RoleUserController;

import com.ToDoiVar.ShoesPee.Models.InforUser;
//import com.ToDoiVar.ShoesPee.Models.ShoeModels;
import com.ToDoiVar.ShoesPee.Services.InforUserService;
import com.ToDoiVar.ShoesPee.repositiory.InforUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class InforUserController {
    @Autowired
    private InforUserService inforUserService;

    @GetMapping("/inforuser")
    public ResponseEntity<List<InforUser>> getAllInfor(){
        return new ResponseEntity<>(inforUserService.getAllInfor(), HttpStatus.OK);
    }

    @GetMapping("/inforuser/{id}")
    public InforUser getInforUserById(@PathVariable int id){
        return inforUserService.getInforUserById(id);
    }

    @PutMapping("/inforuser/{id}")
    public InforUser editInforUser(@PathVariable int id,@RequestBody InforUser editInforUser){
        return inforUserService.updateInforUser(id,editInforUser);
    }
    @PostMapping("/addinfor/{userid}")
    public InforUser addInforUser(@PathVariable int userid,@RequestBody InforUser inforUser){
        return inforUserService.addInforUser(inforUser,userid);
    }

}
