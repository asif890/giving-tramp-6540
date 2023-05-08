import React from "react";
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
let allCart = JSON.parse(localStorage.getItem("cart"))||[];




// function remove (el){
//   let Cart=allCart.filter((ele)=>{
//      return ele.id!==el.id
//    })
//    localStorage.setItem("cart",JSON.stringify(Cart))
//    Cart () 
//  }





function Cart () {
  function navclick(){
    return <Navigate to={"/"}/>
  }
 
  
  return (
    <div style={{display:"flex" ,width:"100%"  }} >


      <div  style={{width:"1000px"}}>
      {allCart .length === 0 && <p>Your cart is empty.</p>}
      {allCart .map((el) => (
        <div key={el.id}style={{display:"flex",justifyContent:"space-between"}}>

      <div>  <img src={el.image} alt={el.name}width={150}height={150}/></div>
      <div  style={{width:"300px"}} > 
        <p>Title:{el.title}</p>
        <p>category:{el.category}</p>
        
        </div>
     
    
        
        <div style={{width:"200px"}}><p>price:{el.price}</p></div>
       
        
        <div  style={{margin   :"20px"}}>
        <div >
          <button>+</button>
          <button>1</button>
          <button>-</button>
        </div>
        <div><button >remove</button></div>
        </div>
     
        </div>

       
      ))}
       </div>
      
      <div style={{display:"flex",width:"500px",padding:"100px" }}>
        <div style={{width:"300px",textAlign:"left" }}>
          <h3>item:</h3>
          <h3>Delivery:</h3>
          <h3>Promotion Applied:</h3>
          <h3>Hendling fee:</h3>
          <hr/>
          <h3>ORDER TOTAL</h3>
          </div>
        <div >
          <h3>1300</h3>
          <h3>1300</h3>
          <h3>1300</h3>
          <h3>1300</h3>
          <hr/>
          <h3>1300</h3>
          <hr/>
         
          <button style={{width:"150px" }} onClick={navclick}>Place Your order</button>
          </div>
          
      </div>
    </div>
  );
};

export default Cart;