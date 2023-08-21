import React, { useEffect } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const PriceCalculation = () => {
  const result = useSelector((state) => state.displayData);
  console.log('inprice')



  const price = result.map((element) => {
    let total = element.price * element.count;
    return total;
  });

  const total_price = price.reduce((acc, current) => {
    return acc + current;
  }, 0);

  const discountprice = total_price * 0.1; // 10 percent discount
  const shipmentprice = 10 * price.length; // per product charge will be 10.

  const totalcost = total_price - discountprice + shipmentprice;

  return (
    <div className="pricecalculation">
      <h2>HAPPY CART TOTAL</h2>
      <div className="total-cal">
        <span>Subtotal</span>
        <span>{total_price.toFixed(2)}</span>
      </div>
      <div className="total-disc">
        <span>
          Discount on total{" "}
          <span
            style={{ fontStyle: "italic", color: "green", fontSize: "0.8rem" }}
          >
            10% OFF
          </span>
        </span>
        <span>{discountprice.toFixed(2)}</span>
      </div>
      <div className="ship-price">
        <span>
          Shipment Price{" "}
          <span
            style={{ fontStyle: "italic", color: "green", fontSize: "0.8rem" }}
          >
            Fixed Price Per Product
          </span>
        </span>
        <span>{shipmentprice.toFixed(2)}</span>
      </div>
      <div className="total-cost">
        <span>Total Cost</span>
        <span style={{ fontWeight: "bold" }}>{totalcost.toFixed(2)}</span>
      </div>
      <div className="checkout">
        <button>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ marginRight: "5px" }}
          />
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default PriceCalculation;
