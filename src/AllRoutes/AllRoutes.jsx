import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Navbar from "../Components/Navbar/Navbar";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/register" element={ <Register /> } />
        </Routes>
    )
}

export default AllRoutes;