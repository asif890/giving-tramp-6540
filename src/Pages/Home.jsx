import React from "react";
import { useEffect, useState } from 'react';
import logo from "../images/p1.png"


const intialstate={
    title:"",
    category:"",
    image:"",
    price:""
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
        <div>
            
           
            <div className="App">
      <div>
        <div>
          
         
          <input type="radio" name='category' value="category" 
          checked ={filterby=="electronics"}
          onChange={()=>{
            setfilterby("electronics")
          }}
          />
          <label>filter by electronics</label>


          <input type="radio" name='category' value="category" 
          checked ={filterby=="jewelery"}
          onChange={()=>{
            setfilterby("jewelery")
          }}
          />
          <label>filter by jewelery</label>


          <input type="radio" name='category' value="category" 
          checked ={filterby=="clothings"}
          onChange={()=>{
            setfilterby("clothings")
          }}
          />
          <label>filter by clothings</label>

          {/* <input type="radio" name='category' value="category" 
          checked ={filterby==""}
          onChange={()=>{
            setfilterby("")
          }}
          />
          <label>reset</label> */}
          <button onClick={()=>setfilterby("")}>seset</button>
        </div>
        <div>
       <button onClick={()=>setsortby("asc")}>sort by asc</button>
       <button onClick={()=>setsortby("desc")}>sort by dec</button>
       <button onClick={()=>setsortby("")}> reset all</button>

        </div>
       
        <img src={logo} alt='fon'/>
        <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)"}}>
          {data.map((el,i)=>(
            <div key={el.id}>

              <img src={el.image} alt={el.name}width={200}height={200}/>
              <p>Title:{el.title}</p>
              <p>category:{el.category}</p>
              <p>price:{el.price}</p>
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
        </div>
    )
}
export default Home