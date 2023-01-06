import axios from 'axios';
import { myContext } from '../Context';

import React,{useContext,useState,useEffect} from 'react';
function Productpage() {
    const[productpage,setProductpage]=useState([])
    const{selectprod,count,setCount,addtocart,setAddtocart,total,setTotal}=useContext(myContext)
    const sp=selectprod;
 useEffect(()=>{

  axios.get("https://fakestoreapi.com/products/"+sp).then((res)=>setProductpage(res.data));
 });
 const handleClick=()=>{
    setAddtocart([productpage,...addtocart])
    setTotal(total+productpage.price)

    setCount(count+1)
  }
  return (
 <>
    <div className='pageproduct' key={productpage.id}>
    <img className='pageimg' src={productpage.image} alt=""></img>
    <div>
        <div className='pagetitle'>{productpage.title}</div>
        <div className='pagedesc'><b>Description : </b>{productpage.description}</div>
        <div><b>Price : </b>${productpage.price}</div>
        <button onClick={handleClick}>Add To Cart</button>

    </div>
    </div>
    </>
  );
}

export default Productpage;
