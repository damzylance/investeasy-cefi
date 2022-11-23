import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Home from "./Dashboard/Home/Home";
import Registerotp from "./Auth/Registerotp";
import Resetotp from "./Auth/Resetotp";
import Wallet from "./Dashboard/Wallet/Wallet";
import Transactions from "./Dashboard/Transactions/Transactions";
import Navbar from "./Dashboard/Navbar/Navbar";
import "./Dashboard/dashboard.css";
import Borrow from "./Dashboard/Borrow/Borrow";
import Transaction from "./Dashboard/Transaction/Transaction";
import Profile from "./Dashboard/Profile/Profile";
import EditProfile from "./Dashboard/Profile/EditProfile/EditProfile";
import Kyc from "./Dashboard/Profile/Kyc/Kyc";
import Bankdetails from "./Dashboard/Profile/Bank/Bankdetails";
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
          <Route exact path="transactions" element={<Transactions />} />
          <Route exact path="transactions/:param" element={<Transaction />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="profile/edit" element={<EditProfile />} />
          <Route exact path="profile/kyc" element={<Kyc />} />
          <Route exact path="profile/bank" element={<Bankdetails />} />
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
