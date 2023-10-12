import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import Location from "./customer/components/Location/Location";
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
