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
     


        <div  style={{width:"100%",display:"flex",justifyContent:"space-between",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <div><img src={logo} style={{width:"130px",height :"89px"}} alt="none"/></div>
        <div><h1>The Flower Shop</h1></div>    

        <div style={{margin:"20px",display:"flex",justifyContent:"space-between"}}>
            
   {
    links.map((e)=>{
        return <div   style={{margin:"5px",color:"black"}}  ><Link style={{color:"black"}}  key={e.path} to={e.path}>{e.title }</Link></div>
    })
   }
   
   
        </div>
       
        </div>
    )
}
export default Navbar