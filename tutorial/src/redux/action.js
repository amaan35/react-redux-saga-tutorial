export const addToCart = (data) => {
    console.log("add to cart called", data)
    return {
        type: "ADD_TO_CART",
        data: data
    };
}