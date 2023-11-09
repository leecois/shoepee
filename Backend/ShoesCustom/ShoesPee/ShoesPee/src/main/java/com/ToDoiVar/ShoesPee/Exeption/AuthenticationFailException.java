package com.ToDoiVar.ShoesPee.Exeption;

public class AuthenticationFailException extends IllegalArgumentException  {
    public AuthenticationFailException(String msg) {
        super(msg);
    }
}
