import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRouters from "./Routers/AdminRouters";

function App() {
  return (
    <div className="">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminRouters />} /> {/* Add this route for /admin */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
