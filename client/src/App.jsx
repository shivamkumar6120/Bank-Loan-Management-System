import { Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import About  from "./pages/About"
import Contactus from './pages/Contactus';
import UserDashboard from "./pages/UserDashboard";
import ApplyLoan from "./pages/ApplyLoan";
import { LoanProvider } from "./context/LoanContext";
import Products from "./pages/Products";
import { EmiProvider } from "./context/EmiContext";
import EmiPayments from './pages/EmiPayments';
import { NotificationProvider } from "./context/NotificationContext";
import Notifications from "./pages/Notifications";
import ProfileKYC from "./pages/ProfileKYC";
function App() {
  return (
    <div>
      <LoanProvider>
        <EmiProvider>
          <NotificationProvider>
      <Routes>
        {/* Home Page as default landing page */}
        <Route path="/" element={<Home />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/dashboard" element={<UserDashboard/>}/>
        <Route path="/apply-loan" element={<ApplyLoan/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/dashboard/emi-payments" element={<EmiPayments/>}/>
        <Route path="/notification" element={<Notifications/>}/>
        <Route path="/profile-kyc" element={<ProfileKYC/>}/>
      </Routes>

      <ToastContainer position="top-left" autoClose={3000}  />
      </NotificationProvider>
      </EmiProvider>
      </LoanProvider>
    </div>
  );
}

export default App;
