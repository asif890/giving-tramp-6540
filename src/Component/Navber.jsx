import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/img.jpg"

const Navbar=()=>{
    const links=[
        {path:"/",title:"Home"},
        {path:"/login",title:"Login"},
        {path:"/product",title:"Cart"}
        
       
    ]
    return (
     


        <div  style={{border:"2px solid red" ,width:"100%",display:"flex",justifyContent:"space-between"}}>
    <div><img src={logo} style={{width:"130px",height :"80px"}} alt="none"/></div>
        <div><h1>The Flower Shop</h1></div>    

        <div style={{border:"2px solid blue",margin:"20px",display:"flex",justifyContent:"space-between"}}>
            
   {
    links.map((e)=>{
        return <div   style={{border:"2px solid red",margin:"5px"}}  ><Link  key={e.path} to={e.path}>{e.title }</Link></div>
    })
   }
   
   
        </div>
       
        </div>
    )
}
export default Navbar