import React,{useContext} from 'react'
import cart from '../Images/cart.png'
import { myContext } from '../Context';
import {
  Link
  } from "react-router-dom";
function Nav() {
  const{count}=useContext(myContext)
  return (
    <>
    <div className='navbar'>
      <div className='heading'>
      <div className='name'>Clothing Store</div>
        <Link style={{ textDecoration: 'none' }} to="/productlist"> <div className='navproducts'>Products</div> </Link>
        </div>
        <Link style={{ textDecoration: 'none' }} to="/cart">
        <div className='cart'>
          <img className='carticon' src={cart} alt=""/>
          <div>Cart</div>
          <div >{count}</div>
        </div>
        </Link>
    </div>
    </>
  )
}

export default Nav;
