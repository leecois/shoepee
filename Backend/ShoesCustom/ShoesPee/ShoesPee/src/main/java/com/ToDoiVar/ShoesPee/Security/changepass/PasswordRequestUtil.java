package com.ToDoiVar.ShoesPee.Security.changepass;

import lombok.Data;

/**
 * @author Sampson Alfred
 */
@Data
public class PasswordRequestUtil {
    private String email;
    private String oldPassword;
    private String newPassword;
}
