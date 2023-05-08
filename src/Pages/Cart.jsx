import React from "react";
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
// let allCart = JSON.parse(localStorage.getItem("cart"))||[];



function Cart () {
  const [count ,setcount]=useState(1)
  const [allCart, setAllCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  const [placeorder,setplaceorder] = useState(false)

  function remove (el){
    let Cart=allCart.filter((ele)=>{
       return ele.id!==el.id
     })
     setAllCart(Cart);
     localStorage.setItem("cart",JSON.stringify(Cart))
     
   }



  const totalprice=allCart.reduce((acc,item)=>acc+(Math.floor(item.price*item.quantity)),0)

  function quantityHandlerPlus(id) {
    const newData = allCart.map((e) => {
      if(e.id == id) {
        console.log(e)
        return {
          ...e,
          quantity : e.quantity + 1
        }
      } else {
        return e;
      }
    })
    setAllCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData))
  }
  function quantityHandlerMinus(id) {
    const newData = allCart.map((e) => {
      if(e.id == id) {
        console.log(e)
        return {
          ...e,
          quantity : e.quantity - 1
        }
      } else {
        return e;
      }
    })
    setAllCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData))
  }
  if(placeorder){
    alert("order placed successfully")
    return <Navigate to="/"/>
}
  
  return (
    <div style={{display:"flex" ,width:"100%" ,marginTop:"20px" }} >


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
          <button   onClick={()=>{
            quantityHandlerPlus(el.id)
          }} >+</button>
          <button>{el.quantity}</button>
          <button onClick={()=>{
            quantityHandlerMinus(el.id)
          }} disabled={el.quantity==1}>-</button>
        </div>
        <div><button onClick={() => remove(el)}>remove</button></div>
        </div>
     
        </div>

       
      ))}
       </div>
      
      <div style={{display:"flex",width:"500px",padding:"100px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <div style={{width:"300px",textAlign:"left" }}>
          <h3>item:</h3>
          <h3>Delivery:</h3>
          <h3>Promotion Applied:</h3>
          <h3>handling fee:</h3>
          <hr/>
          <h3>ORDER TOTAL</h3>
          </div>
        <div >
          <h3>{totalprice}</h3>
          <h3>free</h3>
          <h3>free</h3>
          <h3>{allCart.length === 0 ?(<p>0</p>):(50)}</h3>
          <hr/>
          <h3>{allCart.length === 0 ?(<p>0</p>):(Math.floor(totalprice+50))}</h3>
          <hr/>
         
          <button style={{width:"150px",height:"30px",backgroundColor:"purple",color:"white",border:"white" }} onClick={()=>setplaceorder(true)} >Place Your order</button>
          </div>
          
      </div>
    </div>
  );
};

export default Cart;