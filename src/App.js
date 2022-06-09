import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Home from "./Dashboard/Home.js/Home";
import Registerotp from "./Auth/Registerotp";
import Resetotp from "./Auth/Resetotp";
import Wallet from "./Dashboard/Wallet.js/Wallet";
import Navbar from "./Dashboard/Navbar/Navbar";
import "./Dashboard/dashboard.css";
import Borrow from "./Dashboard/Borrow/Borrow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/register/otp" element={<Registerotp />} />
        <Route exact path="/passwordreset" element={<Resetotp />} />
        <Route path="/dashboard" element={<DashboardRoute />}>
          <Route path="" element={<Navigate to="home" />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="wallet" element={<Wallet />} />
          <Route exact path="borrow" element={<Borrow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const DashboardRoute = () => {
  return (
    <div className="dashLayout">
      <Navbar />
      <Outlet />
    </div>
  );
};
