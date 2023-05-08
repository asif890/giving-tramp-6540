import { useContext } from "react";
   import {authcontext} from "../Context/Authcontext"
  
   import { Navigate } from "react-router-dom";
    
   function Login (){


     let {isauth,login,logout}=useContext(authcontext)   


     
     if(isauth) {
        return <Navigate to={"/"}/>
            
        
    }
      return (
         <div  style={{backgroundColor:"#00796B",
         height:"600px",width:"100%"
          }}>
          

            <div style={{
         height:"600px",width:"40%",textAlign:"left",margin:"auto"
          }}>
            <h1  style={{color:"white"}}><b>Hello!</b></h1>
            <br/>
            <br/>
            <input type="email"  placeholder="Enter Your Email" id="email" style={{ fontSize:"25px",width:"70%",outline:"none",color:"white"}}/>
            <br/>
            <br/>
        <input type="password" placeholder="Enter Your password"  id="password" style={{ fontSize:"25px",width:"70%"
      ,color:"white"}}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p style={{color:"white"}}>by continuing I agree to FlowerAura’s Terms & Conditions and Privacy Policy</p>

            <button style={{height:"40px",width:"70%",backgroundColor:"#00796B",color:"white"}} onClick={login }>Login </button>
            </div>
  
    
    
    
         </div>
      )
   }
   export default Login;