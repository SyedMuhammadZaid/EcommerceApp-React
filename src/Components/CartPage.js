import React, { useEffect } from "react";
import Cart from "./Cart";
import { useSelector,useDispatch } from "react-redux";
import PriceCalculation from "./PriceCalculation";
import { showCartData } from "../Redux/Action";

const CartPage = () => {
  const result1 = useSelector((state)=>state.cartData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(showCartData(result1))
    
  },[result1])

  let result = useSelector((state) => state.displayData);
  // console.log(result)

  return (
    <div className="cartpage">
      {result.map((element) => {
        return (
          <Cart
          id={element.id}
          title={element.title}
          category={element.category}
          price={element.price}
          image={element.image}
          count={element.count}
          />
        );
      })}
      {result.length!==0 ? <PriceCalculation /> : ''}
    
    </div>
  );
};

export default CartPage;

// const data = [
//   { id: 1, name: 'zaid' },
//   { id: 2, name: 'akmal' },
//   { id: 1, name: 'zaid' }
// ];

// const uniqueData = data.reduce((acc, current) => {
//   const existingItem = acc.find(item => item.id === current.id && item.name === current.name);
//   if (!existingItem) {
//     acc.push(current);
//   }
//   return acc;
// }, []);

// console.log(uniqueData);


// const data = [
//   { id: 1, name: 'zaid' },
//   { id: 2, name: 'akmal' },
//   { id: 1, name: 'zaid' }
// ];

// const uniqueDataWithCounts = data.reduce((acc, current) => {
//   const existingItem = acc.find(item => item.id === current.id && item.name === current.name);
//   if (existingItem) {
//     existingItem.count++;
//   } else {
//     acc.push({ ...current, count: 1 });
//   }
//   return acc;
// }, []);

// console.log(uniqueDataWithCounts);

// [
//   { id: 1, name: 'zaid', count: 2 },
//   { id: 2, name: 'akmal', count: 1 }
// ]


