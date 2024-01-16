import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    let data = "hello";
    // await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("productList called", data)
    return {
        type: PRODUCT_LIST,
        data: data
    };
}