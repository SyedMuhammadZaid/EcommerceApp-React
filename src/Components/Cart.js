import React, { useEffect } from "react";
import { addToCart,removeFromCart } from "../Redux/Action";
import { useDispatch } from 'react-redux'


const Cart = ({id,title,category,price,image,count}) => {
  const dispatch = useDispatch()
  let value = price*count
  return (
    <div className="cartContainer" key={id}>
      <div className="cart-img">
          <button onClick={()=>{dispatch(addToCart(id,title,category,price,image))}}>+1</button>
        <img src={image}></img>
          <button onClick={()=>{dispatch(removeFromCart(id))}}>-1</button>
      </div>

      <div className="cart-desc">
        <p>{title}  <span style={{fontStyle:'italic', color:'green'}}>  (x{count})</span></p>

      </div>
      <div className="cart-price">
        <h5><span style={{fontStyle:'italic', color:'green'}}>Price: </span>{value}<span> $</span></h5>
      </div>
    </div>
  );
};

export default Cart;
