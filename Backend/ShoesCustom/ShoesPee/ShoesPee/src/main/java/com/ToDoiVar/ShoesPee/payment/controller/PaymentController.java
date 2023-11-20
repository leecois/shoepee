    package com.ToDoiVar.ShoesPee.payment.controller;

    import com.ToDoiVar.ShoesPee.Models.Order;
    import com.ToDoiVar.ShoesPee.Models.OrderResponse;
    import com.ToDoiVar.ShoesPee.Models.User;
    import com.ToDoiVar.ShoesPee.Security.config.JwtService;
    import com.ToDoiVar.ShoesPee.Services.OrderService;
    import com.ToDoiVar.ShoesPee.Services.UserService;
    import com.ToDoiVar.ShoesPee.dto.OrderDto;
    import com.ToDoiVar.ShoesPee.payment.DTO.PaymentResDTO;
    import com.ToDoiVar.ShoesPee.payment.DTO.TransactionStatusDTO;
    import com.ToDoiVar.ShoesPee.payment.config.Config;
    import com.ToDoiVar.ShoesPee.repositiory.OrderRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.context.annotation.Lazy;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.io.UnsupportedEncodingException;
    import java.net.URLEncoder;
    import java.nio.charset.StandardCharsets;
    import java.text.SimpleDateFormat;
    import java.util.*;

    @RestController
    @RequestMapping("/api/payment")
    @Lazy
    public class PaymentController {
        @Autowired
        private JwtService jwtService;
        @Autowired
        private UserService userService;
        @Autowired
        private OrderService orderService;

        @PutMapping("/pay/{id}")
        public String getPay(@RequestHeader("Authorization") String bearertoken,@PathVariable int id) throws UnsupportedEncodingException{
            String token = bearertoken.substring(7);
            String username =  jwtService.extractUsername(token);
            User user = this.userService.getUserByEmail(username);
//            OrderResponse order = this.orderService.findOrdersByUserId(user.getUserId());
//           List<Order> order1 = this.orderRepository.findByUser_UserId(user.getUserId());
//            Optional<Order> selectedOrder = userOrders.stream()
//                    .filter(order -> order.getId() == id)
//                    .findFirst();
//            if(selectedOrder.isPresent()){
//                Order order = selectedOrder.get();
//                this.orderService.paidOrder()
//            }
            Order paidOrder = orderService.paidOrder(user.getUserId(), id);
//            order.setOrderStatusForContent("PAIDED");
            String vnp_Version = "2.1.0";
            String vnp_Command = "pay";
            String orderType = "other";
            long amount = (long) paidOrder.getOrderAmt() *240*100;
            String bankCode = "NCB";

            String vnp_TxnRef = Config.getRandomNumber(8);
            String vnp_IpAddr = "3.1.85.78";

            String vnp_TmnCode = Config.vnp_TmnCode;
//            String vnp_CancelUrl = Config.vnp_CancelUrl;


            Map<String, String> vnp_Params = new HashMap<>();
            vnp_Params.put("vnp_Version", vnp_Version);
            vnp_Params.put("vnp_Command", vnp_Command);
            vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
            vnp_Params.put("vnp_Amount", String.valueOf(amount));
            vnp_Params.put("vnp_CurrCode", "VND");

            vnp_Params.put("vnp_BankCode", bankCode);
            vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
            vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
            vnp_Params.put("vnp_OrderType", orderType);

            vnp_Params.put("vnp_Locale", "vn");
            vnp_Params.put("vnp_ReturnUrl", Config.vnp_ReturnUrl);
//            order.setOrderStatusForContent("PAIDED");
            vnp_Params.put("vnp_IpAddr", vnp_IpAddr);
//            vnp_Params.put("vnp_CancelUrl", Config.vnp_CancelUrl);

            Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
            SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
            String vnp_CreateDate = formatter.format(cld.getTime());
            vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

            cld.add(Calendar.MINUTE, 15);
            String vnp_ExpireDate = formatter.format(cld.getTime());
            vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

            List fieldNames = new ArrayList(vnp_Params.keySet());
            Collections.sort(fieldNames);
            StringBuilder hashData = new StringBuilder();
            StringBuilder query = new StringBuilder();
            Iterator itr = fieldNames.iterator();
            while (itr.hasNext()) {
                String fieldName = (String) itr.next();
                String fieldValue = (String) vnp_Params.get(fieldName);
                if ((fieldValue != null) && (fieldValue.length() > 0)) {
                    //Build hash data
                    hashData.append(fieldName);
                    hashData.append('=');
                    hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    //Build query
                    query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                    query.append('=');
                    query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                    if (itr.hasNext()) {
                        query.append('&');
                        hashData.append('&');
                    }
                }
            }
            String queryUrl = query.toString();
            String vnp_SecureHash = Config.hmacSHA512(Config.secretKey, hashData.toString());
            queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
            String paymentUrl = Config.vnp_PayUrl + "?" + queryUrl;
            return paymentUrl;
        }

        @PutMapping("/cre-payment")
        public String crePayment(@RequestHeader("Authorization") String bearertoken){
            String token = bearertoken.substring(7);
            String username =  jwtService.extractUsername(token);
            User user = this.userService.getUserByName(username);
            OrderResponse order = this.orderService.findOrdersByUserId(user.getUserId());
            order.getTotalPrice();
            order.setOrderStatusForContent("PAIDED");
            return "redirect:/success";
        }

//        @GetMapping("/payment-infor")
//        public ResponseEntity<?> transaction(@RequestHeader("Authorization") String bearertoken) {
//            String token = bearertoken.substring(7);
//            String username =  jwtService.extractUsername(token);
//            User user = this.userService.getUserByName(username);
//            OrderResponse order = this.orderService.findOrdersByUserId(user.getUserId());
//            order.setOrderStatusForContent("PAIDED");
//            return ResponseEntity.status(HttpStatus.OK).body(order);
//        }

        @GetMapping("/payment-in4")
        public ResponseEntity<String> transaction2(
                @RequestHeader("Authorization") String bearertoken
        )
        {
            String token = bearertoken.substring(7);
            String username =  jwtService.extractUsername(token);
            User user = this.userService.getUserByName(username);
            OrderResponse order2 = this.orderService.findOrdersByUserId(user.getUserId());
            order2.setOrderStatusForContent("PAIDED");

//            TransactionStatusDTO transactionStatusDTO = new TransactionStatusDTO();
//            if (responseCode.equals("00")) {
//                transactionStatusDTO.setStatus("Ok");
//                transactionStatusDTO.setMessage("Successfully");
//                transactionStatusDTO.setData("");
//            } else {
//                transactionStatusDTO.setStatus("No");
//                transactionStatusDTO.setMessage("Failed");
//                transactionStatusDTO.setData("");
//            }
            String link = "/redirect:/success";
            return new ResponseEntity<>(link,HttpStatus.OK);
        }

    }
