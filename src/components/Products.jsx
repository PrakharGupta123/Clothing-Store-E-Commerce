import axios from 'axios';
import { myContext } from '../Context';
import React,{ useState,useEffect, useContext } from 'react';
import {
Link
} from "react-router-dom";
function Products() {
  const[mydata,setMydata]=useState([])
 useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then((res)=>setMydata(res.data));
 },[]);
const{setSelectprod,addtocart,setAddtocart,count,setCount,total,setTotal}=useContext(myContext)
  return (
 <>  
 <div className='productpage'>
 {mydata.map((datas)=>{
  const selectproduct=()=>{
    setSelectprod(datas.id)
    }
  const handleClick=()=>{
    setAddtocart([datas,...addtocart])
    setTotal(total+datas.price)
    setCount(count+1)
  }
  return(
    <>
    <div className='product' onClick={selectproduct} key={datas.id}>
    <Link style={{ textDecoration: 'none' }} to='/singleproduct'>

    <img className='img' src={datas.image} alt=""></img>
    <div className='title'>{datas.title}</div>
    <div className='desc'>{datas.description}</div>
    <div><b>Price : </b>${datas.price}</div>

    <div className='rate'>Rating:{datas.rating.rate}</div>
    </Link>
    <button onClick={handleClick}>Add To Cart</button>
    </div>

    </>
  )

 })}
     </div>

 </>
  );
}

export default Products;
