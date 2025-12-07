import { Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import About  from "./pages/About"
import Contactus from './pages/Contactus';
import UserDashboard from "./pages/UserDashboard";
import ApplyLoan from "./pages/ApplyLoan";

function App() {
  return (
    <div>
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
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
