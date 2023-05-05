import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Product from "../Pages/Product"

function Allroutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
        </Routes>
       
    )
}
export default Allroutes