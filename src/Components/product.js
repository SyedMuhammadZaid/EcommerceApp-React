import React from "react";
import Rating from "@mui/material/Rating";
import { addToCart } from "../Redux/Action";
import {useDispatch} from 'react-redux'

const Product = ({id,title,category,price,image,rating}) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={image} />
      <div className="product-desc">
        <p>{title}</p>
      </div>
      <div className="price-desc">
        <span><span style={{fontStyle:'italic'}}>Price:</span> {price} $</span>
        <span><span style={{fontStyle:'italic'}}>Category:</span> {category}</span>
      </div>
      <div className="rating">
      <Rating name="size-small" defaultValue={rating} size="small" readOnly />
      <button onClick={()=> dispatch(addToCart(id,title,category,price,image))}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
