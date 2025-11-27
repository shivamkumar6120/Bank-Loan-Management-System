import { Route, Router } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home } from "./pages/Home"

function App() {
 
  return (
    <div>
     <Router>
        <Route path="/" element={<Home/>}></Route>
     </Router>
     <ToastContainer/>
    </div>
  )
}

export default App
