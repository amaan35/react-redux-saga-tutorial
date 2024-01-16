import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant";

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
      console.log("Add to cart condition");
      return [action.data, ...data];
    // case REMOVE_FROM_CART:
    //   console.log("remove from cart condition");
    //   data.length=data.length?data.length-1:[];
    //   return [...data];
    case REMOVE_FROM_CART:
      console.log("remove from cart condition", action);
      let newdata = data.slice(0, -1);
      return [...newdata];
    case CLEAR_CART:
      console.log("clear cart condition");
      return [];
    default:
      return data;
  }
};
