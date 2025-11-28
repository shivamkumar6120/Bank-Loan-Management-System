import { Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

function App() {
 
  return (
    <div>
     <Routes>
        <Route path="/" element={<Navigate to='/login'/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}>

        </Route>
     </Routes>
     <ToastContainer/>
    </div>
  )
}

export default App
