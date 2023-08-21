import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { productOnSearch, productOnLoad } from "../Redux/Action";
import { Link } from "react-router-dom";
import { showCartData } from "../Redux/Action";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const [searchterm, setterm] = useState("");

  useEffect(() => {
    if (searchterm === "") {
      dispatch(productOnLoad());
    }
  }, [searchterm]);


  return (
    <div className="Header">
      <div className="logo">
      <Link to='/'>
      <h1 >YOURS Store</h1>
      </Link>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search here by category"
          value={searchterm}
          onChange={(e) => setterm(e.target.value)}
          style={{
            width: "100%",
            padding: "1rem",
            border: "none",
            marginRight: "5px",
          }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
          onClick={() => dispatch(productOnSearch(searchterm))}
        />
      </div>

      <div className="cart-container">
        <Link to='/cart'>
          <button onClick={()=>{dispatch(showCartData(result))}}>
            <FontAwesomeIcon icon={faCartShopping} className="carticon" />
          </button>
        </Link>

        <span>
          Cart Products <span>{result.length}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
