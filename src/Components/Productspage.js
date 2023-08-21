import React from "react";
import Product from "./product";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { productOnLoad } from "../Redux/Action";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";


const Productspage = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.productData);
  console.log(result)

  useEffect(() => {
    dispatch(productOnLoad());
  }, []);

  return (
    <div className="product-container">
      {result.map((product) => {
        return (
          <Product
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            rating={product.rating.rate}
            key={product.id}
          />
          
        );
      })}
    </div>
  );
};

export default Productspage;
