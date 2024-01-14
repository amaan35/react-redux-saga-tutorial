import React from "react";
import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const product = {
    name: "android phone",
    type: "mobile",
    price: "10000",
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          add to cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>
          remove from cart
        </button>
      </div>
    </div>
  );
};

export default Main;
