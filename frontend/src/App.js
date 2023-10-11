// Trong tệp App.js hoặc index.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Bọc ứng dụng trong Router
import CustomerRouters from "./Routers/CustomerRouters"; // Đảm bảo bạn đã import thành phần chứa Routes

const App = () => {
  return (
    <Router>
      <div>
        <CustomerRouters />
      </div>
    </Router>
  );
};

export default App;
