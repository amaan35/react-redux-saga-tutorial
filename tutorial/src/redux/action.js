import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
    console.log("add to cart called", data)
    return {
        type: ADD_TO_CART,
        data: data
    };
}

export const removeFromCart = (data) => {
    console.log("remove from cart called", data)
    return {
        type: REMOVE_FROM_CART,
        data: data
    };
}