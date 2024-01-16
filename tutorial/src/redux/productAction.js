import { GET_PRODUCT_LIST} from "./constant";

export const productList = () => {
    console.log("type GET_PRODUCT_LIST productList function called inside productAction")
    return {
        type: GET_PRODUCT_LIST,
    };
}