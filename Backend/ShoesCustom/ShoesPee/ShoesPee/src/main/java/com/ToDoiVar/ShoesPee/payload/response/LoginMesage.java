package com.ToDoiVar.ShoesPee.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginMesage {
    String message;
    Boolean status;

}
