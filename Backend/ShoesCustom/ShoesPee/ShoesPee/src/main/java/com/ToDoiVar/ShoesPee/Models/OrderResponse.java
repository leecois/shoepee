package com.ToDoiVar.ShoesPee.Models;

import com.ToDoiVar.ShoesPee.dto.OrderDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {

    private	int pageSize;
    private	int pageNumber;
    private boolean status;
    private	int totalPage;
    private	Long totalElemet;
    private Date orderCreateAt;
    private List<OrderDto> content;
    private	boolean isLastPage;
//    public int getPageSize() {
//        return pageSize;
//    }
//    public void setPageSize(int pageSize) {
//        this.pageSize = pageSize;
//    }
//    public int getPageNumber() {
//        return pageNumber;
//    }
//    public void setPageNumber(int pageNumber) {
//        this.pageNumber = pageNumber;
//    }
//    public int getTotalPage() {
//        return totalPage;
//    }
//    public void setTotalPage(int totalPage) {
//        this.totalPage = totalPage;
//    }
//
//    public Long getTotalElemet() {
//        return totalElemet;
//    }
//    public void setTotalElemet(Long totalElemet) {
//        this.totalElemet = totalElemet;
//    }
//    public List<OrderDto> getContent() {
//        return content;
//    }
//    public void setContent(List<OrderDto> content) {
//        this.content = content;
//    }
//    public boolean isLastPage() {
//        return isLastPage;
//    }
//    public void setLastPage(boolean isLastPage) {
//        this.isLastPage = isLastPage;
//    }

    public double getTotalPrice() {
        double totalPrice = 0.0;
        if (content != null) {
            for (OrderDto orderDto : content) {
                totalPrice += orderDto.getOrderAmt();
            }
        }

        return totalPrice;
    }
    public void setOrderStatusForContent(String paymentStatus) {
        if (content != null) {
            for (OrderDto orderDto : content) {
                orderDto.setPaymentStatus(paymentStatus);
            }
        }
    }

}

