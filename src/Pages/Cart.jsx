import React from "react";
import { useEffect, useState } from 'react';
let allCart = JSON.parse(localStorage.getItem("cart"))||[];




// function remove (el){
//   let Cart=allCart.filter((ele)=>{
//      return ele.id!==el.id
//    })
//    localStorage.setItem("cart",JSON.stringify(Cart))
//    Cart () 
//  }





function Cart () {
  
 
  
  return (
    <div style={{display:"flex",border:"2px solid black"   
     }} >
      
      {allCart .length === 0 && <p>Your cart is empty.</p>}
      {allCart .map((el) => (
        <div key={el.id}style={{border:"2px solid green",
        width:"20%",height:"200"
         }}>

      <div>  <img src={el.image} alt={el.name}width={100}height={100}/></div>
      <div> 
        <p>Title:{el.title}</p>
        <p>category:{el.category}</p>
        
        </div>
        <div style={{border:"2px solid green",
        width:"200",height:"200"
         }}>

        <div>
        <div><p>price:{el.price}</p></div>
       
        </div>
        <div>
          <button>+</button>
          <button>1</button>
          <button>-</button>
        </div>
        <div><button >remove</button></div>
        </div>
        </div>
      ))}
      <div style={{display:"flex",border:"2px solid blue",
        width:"200",height:"200"
         }}>
        <h1>1</h1>
      </div>
    </div>
  );
};

export default Cart;