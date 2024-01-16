import {takeEvery, put} from 'redux-saga/effects'
import { GET_PRODUCT_LIST, HANDLE_GET_PRODUCT_LIST } from './constant';

function* getProducts() {
    console.log("Still inside productSaga but now getting data from API")
    let data = yield fetch("http://localhost:3000/product");
    data = yield data.json();
    console.log("Received data from API, now sending it to the receiver using a type HANDLE_GET_PRODUCT_LIST")
    yield put({
        type: HANDLE_GET_PRODUCT_LIST,
        data
    })
}

function* productSaga()
{
    console.log("Inside productSaga function and calling getProducts function by using GET_PRODUCT_LIST from action")
    yield takeEvery(GET_PRODUCT_LIST, getProducts)
}
export default productSaga;