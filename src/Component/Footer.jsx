import React from "react";
import { useContext } from "react";
   import {authcontext} from "../Context/Authcontext"
    function Footer (){
        let {isauth,login,logout}=useContext(authcontext) 
          return (
         <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black",
         width:"200",height:"700",color:"white",marginTop:"20px"
          }}>
            <div>
            <h3>QUICK LINKS</h3>
            <hr/>
          <br />
                 
          <h5>Plants & Terrarium</h5>
          <h5>Dried flowers</h5>
          <h5>Bouquet</h5>
          <h5>Box Arrangements</h5>
          <h5>Service Areas</h5>
          <br/>
          <br/>
        
          <br/>
          <br/>

            </div>


            <div>
            <h3>WORKING HOURS</h3>
            <hr/>
            <br />
            <h5>Monday to Friday</h5>
          <h5>10.00 AM - 4.00 PM</h5>
          <h5>Sat: 10.00 AM - 2.00 PM</h5>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
       
            </div>



            <div>
            <h3>OUR NEWSLETTER</h3>
            <hr/>
            <br />
            <h5>Get in your inbox the latest News</h5>
          <h5>and Offers</h5>
          <h5>Bouquet</h5>
          <h5>Box Arrangements</h5>
          <h5>Service Areas</h5>
          <br/>
          <br/>
          
        
            </div>



            <div>
            <h3>CONTACT US</h3>
            <hr/>
            <br />
            <h4>LOCATION</h4>
          <h5>242 High street, KEW VIC 3101</h5>
          <h5>CALL US</h5>
          <h5>(03) 8528 2747</h5>
          <h4>EMAIL US</h4>
          <h5>info@dandelionflorist.au</h5>
          <button onClick={logout }><b>Logout</b></button>
          <br/>
          <br/>
          
          
         
            </div>
        
         </div>

          )
    }
    export  default Footer;