import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Cart from "../Pages/Cart"

function Allroutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/product" element={<Cart/>}></Route>
        </Routes>
       
    )
}
export default Allroutes