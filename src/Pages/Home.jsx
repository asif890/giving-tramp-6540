import React from "react";
import { useEffect, useState } from 'react';
import logo from "../images/p1.png"
import last from "../images/p3.jpg"

let CartArr=JSON.parse(localStorage.getItem("cart"))||[]

const intialstate={
    title:"",
    category:"",
    image:"",
    price:""
  }

  function  checkDuplicate(product){
    for(let i=0;i<CartArr.length;i++){
      if(CartArr[i].id===product.id){
        return true
      }
    }
    return false
}

function Home (){

    const [data ,setdata]=useState([])

    const [loding, setloding]=useState(false)
    const [page ,setpage] = useState(1)
    const [filterby, setfilterby] = useState("")
    const [sortby, setsortby] = useState("")
    
    const limit=8
    const sort="price"
    
    function getapiurl (url,filterby,sortby,sort){
      if (filterby){
        return (url=`${url}&category=${filterby}`)
      }else if(sortby && sort){
        return (url=`${url}&_sort=${sort}&_order=${sortby}`)
      }
    return url
    }
    
    
    
    
    
    async function fetcproductdetaisfromapi(page){
      let apiurl=getapiurl(`http://localhost:8080/products?_page=${page}&_limit=${limit}`,
      filterby,sortby,sort)
      setloding(true)
     try {
      const res=await fetch(apiurl)
      let data= await res.json()
      //console.log(data)
      setdata(data)
     } catch (error) {
      console.log(error)
      setloding(false)
     }
    }
    
    console.log(data)
    
    
    
    
    
    useEffect(()=>{
      fetcproductdetaisfromapi(page)
    },[page,filterby,sortby])
    
    
    
    return (
        <div style={{marginTop:"20px"}}>
        
            <div className="App">
      <div>
        <div style={{display:"flex",justifyContent:"space-between",width:"70%"}}>
          
         <div>
          <input type="radio" name='category' value="category" 
          checked ={filterby=="mixed"}
          onChange={()=>{
            setfilterby("mixed")
          }}
          />
          <label>Mixed</label>
          </div>
          <div>
          <input type="radio" name='category' value="category" 
          checked ={filterby=="birthday"}
          onChange={()=>{
            setfilterby("birthday")
          }}
          />
          <label>Birthday</label>
          </div>
          <div>
          <input type="radio" name='category' value="category" 
          checked ={filterby=="anniversary"}
          onChange={()=>{
            setfilterby("anniversary")
          }}
          />
          <label>Anniversary</label>
          </div>


          <div>
          <input type="radio" name='category' value="category" 
          checked ={filterby=="roses"}
          onChange={()=>{
            setfilterby("roses")
          }}
          />
          <label>Roses</label>
          </div>

          <div>
          <input type="radio" name='category' value="category" 
          checked ={filterby=="occasions"}
          onChange={()=>{
            setfilterby("occasions")
          }}
          />
          <label>Occasions</label>
          </div>
          {/* <input type="radio" name='category' value="category" 
          checked ={filterby==""}
          onChange={()=>{
            setfilterby("")
          }}
          />
          <label>reset</label> */}
          <div><button onClick={()=>setfilterby("")}>All Flower</button></div>
        </div>
        <div>
       <button onClick={()=>setsortby("asc")}>sort by asc</button>
       <button onClick={()=>setsortby("desc")}>sort by dec</button>
       <button onClick={()=>setsortby("")}> reset all</button>

        </div>
       
        <img src={logo} alt='fon'/>
        <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)"}}>
          {data.map((el,i)=>(
            <div style={{marginTop:"20px"}} key={el.id}>

              <img src={el.image} alt={el.name}width={200}height={200}/>
              <p>{el.title}</p>
              <p>{el.category}</p>
              <p>price:{el.price}</p>
              <button style={{height:"30px",width:"200px",backgroundColor:"purple",color:"white",border:"white"}} onClick={()=>{

                if(checkDuplicate(el)){
                  alert("Product Already in Cart")
                }else{
                  let cartData = JSON.parse(localStorage.getItem('cart'));
                  cartData.push({...el,quantity:1})
                  // CartArr.push({...el,quantity:1})
                  localStorage.setItem("cart",JSON.stringify(cartData))
                  alert("Product Added To Cart")

              }
              }} ><b>Add to Cart</b></button>
            </div>
          ))}
          
        </div>
        <div>
          <button onClick={()=>setpage(page-1)}disabled={page==1}>pre</button>
          <button>{page}</button>
          <button onClick={()=>setpage(page+1)}>next</button>
        </div>
      </div>
    </div>
    <div>
            <img src={last}/>
            </div>
        </div>
    )
}
export default Home