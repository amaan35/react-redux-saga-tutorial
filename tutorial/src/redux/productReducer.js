import { GET_PRODUCT_LIST, HANDLE_GET_PRODUCT_LIST, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  // if(action.type === ADD_TO_CART){
  //     console.log("reducer called", action)
  //     return action.data
  // }
  // else{
  //     return "no action matched";
  // }
  switch (action.type) {
    case HANDLE_GET_PRODUCT_LIST:
      console.log("Handling data from saga, using type : HANDLE_GET_PRODUCT_LIST");
      console.log(action.data);
      return [action.data];
    default:
      return [];
  }
};
