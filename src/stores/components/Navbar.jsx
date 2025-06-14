import React from 'react'
import {Link} from "react-router-dom";
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const {cartItems} = useCart()
  return (
    <>
   <div className="navsection">
    <div className="title">
        <h2>E-mart</h2>
    </div>
    <div className="search">
        <input type="text" class="bar" placeholder='Search...' />
    </div>
    <div className="user">
        <div className="user-detail">
            SignIN/SignUp
        </div>
        <Link to='/cart'> 
        <div className="cart">
            Cart
            <span>
                {cartItems.length}
            </span>
        </div>
        </Link>
         {/* <Link to="/test">
        <li id="hi">Items</li>
        </Link> */}
    </div>
    </div>
    <div className="submenu">
       <ul>
        <Link to='./mobiles'>
         <li>Mobiles</li>
        </Link>
         <Link to='./computers'>
         <li>Computers</li>
        </Link>
        <Link to='./watches'>
         <li>Watches</li>
        </Link>
         <Link to='./men'>
         <li>Men Fashion</li>
        </Link>
        <Link to='./woman'>
         <li>Woman Dressing</li>
        </Link>
        <Link to='./furniture'>
         <li>Furniture</li>
        </Link>
        <Link to='./kitchen'>
         <li>Kitchen</li>
        </Link>
         <Link to='./fridge'>
         <li>Fridge</li>
        </Link>
        <Link to='./tv'>
         <li>TV</li>
        </Link>
        <Link to='./books'>
         <li>Books</li>
        </Link>
         <Link to='./speakers'>
         <li>Speakers</li>
        </Link>
     

       </ul>
    </div>
    </>
    
       
  );
};

export default Navbar