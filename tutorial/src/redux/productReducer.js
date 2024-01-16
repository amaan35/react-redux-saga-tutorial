import { PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  // if(action.type === ADD_TO_CART){
  //     console.log("reducer called", action)
  //     return action.data
  // }
  // else{
  //     return "no action matched";
  // }
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("product list condition");
      return [action.data];
    default:
      return [];
  }
};
