import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if(action.type === ADD_TO_CART){
  //     console.log("reducer called", action)
  //     return action.data
  // }
  // else{
  //     return "no action matched";
  // }
  switch (action.type) {
    case ADD_TO_CART:
      return 1 + 1;
    case REMOVE_FROM_CART:
      return 2 - 1;
    default:
      return "No action matched";
  }
};
