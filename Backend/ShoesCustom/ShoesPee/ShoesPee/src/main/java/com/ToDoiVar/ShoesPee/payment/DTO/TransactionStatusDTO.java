package com.ToDoiVar.ShoesPee.payment.DTO;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class TransactionStatusDTO implements Serializable {
    private String status;
    private String message;
    private String totalprice;
    private String orderInfor;
    private String payDate;
    private String transactionNo;
}
