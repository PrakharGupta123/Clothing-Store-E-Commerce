import React, { useContext } from 'react'
import { myContext } from '../Context';

const Cart = () => {
    const{addtocart,setAddtocart,total,setTotal,count,setCount}=useContext(myContext)
    
  return (
    <>
    <div className='total'>Total : ${(total).toFixed(2)}</div>
    {addtocart.map((cartdatas) =>{
       
         const remove=()=>{
            setAddtocart(addtocart.filter(a=>a.id!==cartdatas.id))     
            setCount(count-1)
            setTotal(total-cartdatas.price)
     }
return(
    <>
    <div className='cartproduct'>
        <div className='product'  key={cartdatas.id}>

            <img className='img' src={cartdatas.image} alt=""></img>
            <div className='title'>{cartdatas.title}</div>
            <div className='desc'>{cartdatas.description}</div>
            <div><b>Price : </b>${cartdatas.price}</div>
            <div className='rate'>Rating:{cartdatas.rating.rate}</div>
        </div>
        
        <div>
            <button  onClick={remove}>Remove from Cart</button>
        </div>
    </div>
    <hr></hr>
    </>
)
    })}
    <div><button className='payment'>Proceed for Payment</button></div>
        </> 

  );
}  ;

export default Cart;
