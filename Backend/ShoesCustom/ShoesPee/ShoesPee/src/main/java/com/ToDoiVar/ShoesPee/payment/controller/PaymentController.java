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
    import com.ToDoiVar.ShoesPee.payment.PaymentService.VNPayService;
    import com.ToDoiVar.ShoesPee.payment.config.Config;
    import com.ToDoiVar.ShoesPee.repositiory.OrderRepository;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    import org.modelmapper.ModelMapper;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.context.annotation.Lazy;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.io.IOException;
    import java.io.UnsupportedEncodingException;
    import java.net.URLEncoder;
    import java.nio.charset.StandardCharsets;
    import java.text.SimpleDateFormat;
    import java.util.*;
    @org.springframework.stereotype.Controller
    @CrossOrigin("*")
    @RestController
    @RequestMapping("/api/v1/auth")
    @Lazy
    public class PaymentController {
        @Autowired
        private JwtService jwtService;
        @Autowired
        private UserService userService;
        @Autowired
        private OrderService orderService;
        @Autowired
        private VNPayService vnPayService;
        @Autowired
        private ModelMapper modelMapper;
        @PostMapping("/pay")
        public String getPay(@RequestBody Order orderid) throws UnsupportedEncodingException{
//            String token = bearertoken.substring(7);
//            String username =  jwtService.extractUsername(token);
//            User user = this.userService.getUserByEmail(username);

//            OrderResponse order = this.orderService.findOrdersByUserId(user.getUserId());
//           List<Order> order1 = this.orderRepository.findByUser_UserId(user.getUserId());
//            Optional<Order> selectedOrder = userOrders.stream()
//                    .filter(order -> order.getId() == id)
//                    .findFirst();
//            if(selectedOrder.isPresent()){
//                Order order = selectedOrder.get();
//                this.orderService.paidOrder()
//            }
            Order order = orderService.getOrderById(orderid.getOrderId());
//            order.setOrderStatusForContent("PAIDED");
            String vnp_Version = "2.1.0";
            String vnp_Command = "pay";
            String orderType = "other";
            long amount = (long) order.getOrderAmt() *100;
            String bankCode = "NCB";

            String vnp_TxnRef = Config.getRandomNumber(8);
            String vnp_IpAddr = Config.vnp_ApiUrl;

            String vnp_TmnCode = Config.vnp_TmnCode;
//            String vnp_CancelUrl = Config.vnp_CancelUrl;


            Map<String, String> vnp_Params = new HashMap<>();
            vnp_Params.put("vnp_Version", vnp_Version);
            vnp_Params.put("vnp_Command", vnp_Command);
            vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
            vnp_Params.put("vnp_Amount", String.valueOf(amount) );
            vnp_Params.put("vnp_CurrCode", "VND");
//            vnp_Params.put("vnp_Orderid", String.valueOf(orderid.getOrderId()));

            vnp_Params.put("vnp_BankCode", bankCode);
            vnp_Params.put("vnp_TxnRef", String.valueOf(orderid.getOrderId()));
            vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
            vnp_Params.put("vnp_OrderType", orderType);

            vnp_Params.put("vnp_Locale", "vn");
            vnp_Params.put("vnp_ReturnUrl", Config.vnp_ReturnUrl);
//            order.setOrderStatusForContent("PAIDED");
            vnp_Params.put("vnp_IpAddr", vnp_IpAddr);
//            vnp_Params.put("vnp_CancelUrl", Config.vnp_CancelUrl);

            TimeZone.setDefault(TimeZone.getTimeZone("Asia/Ho_Chi_Minh")); // Đặt múi giờ mặc định
            Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
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
            String paymentUrl = Config.vnp_PayUrl + "?" + queryUrl  ;
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

        @GetMapping("/payment_infor")
        public void transaction2(
//                @RequestHeader("Authorization") String bearertoken,
                @RequestParam(value = "vnp_Amount") String amount,
                @RequestParam(value = "vnp_BankCode") String bankcode,
                @RequestParam(value = "vnp_OrderInfo") String order,
                @RequestParam(value = "vnp_ResponseCode") String responseCode,
                @RequestParam(value = "vnp_TxnRef") String orderid,
//                @RequestParam(value = "vnp_CreateDate") String payday,

                HttpServletResponse response
//                @PathVariable int id
//                @RequestHeader("Authorization") String bearertoken
        ) throws IOException {
//            String token = bearertoken.substring(7);
//            String username =  jwtService.extractUsername(token);
//            User user = this.userService.getUserByName(username);
//            OrderResponse order2 = this.orderService.findOrdersByUserId(user.getUserId());
//            order2.setOrderStatusForContent("PAIDED");

            TransactionStatusDTO transactionStatusDTO = new TransactionStatusDTO();
            if (responseCode.equals("00")) {
                transactionStatusDTO.setStatus("Ok");
                transactionStatusDTO.setMessage("Successfully");
                transactionStatusDTO.setTotalprice(amount);
                transactionStatusDTO.setOrderInfor(order);
//                transactionStatusDTO.setPayDate(payday);
                Order paidOrder = orderService.paidOrder(Integer.parseInt(String.valueOf(orderid)));
                OrderDto orderDto = this.modelMapper.map(paidOrder,OrderDto.class);
                orderDto = orderService.acceptOrder(Integer.parseInt(String.valueOf(orderid)));
                response.sendRedirect("https://shoepee.vercel.app/success");

            }
            else {
                transactionStatusDTO.setStatus("No");
                transactionStatusDTO.setMessage("Failed");
                response.sendRedirect("https://shoepee.vercel.app/user/purchase");

//                transactionStatusDTO.setData("");
            }
//            String link = "/redirect:/success";
        }
//        @PostMapping("/submitOrder")
//        public String submidOrder(@RequestParam("amount") int orderTotal,
//                                  @RequestParam("orderInfo") String orderInfo,
//                                  HttpServletRequest request){
//            String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
//            String vnpayUrl = vnPayService.createOrder(orderTotal, orderInfo, baseUrl);
//            return "redirect:" + vnpayUrl;
//        }

    }
