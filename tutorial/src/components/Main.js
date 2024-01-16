import React from "react";
import { addToCart, clearCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";

const Main = () => {
  const data = useSelector((state)=>state.productList);
  console.log(data);
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
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          remove from cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          get product list
        </button>
      </div>
    </div>
  );
};

export default Main;
