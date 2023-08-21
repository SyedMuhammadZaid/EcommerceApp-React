import { PRODUCTSDATA,FETCHEDDATA,ONSEARCH } from "../Redux/Constants";
import { put, takeEvery } from 'redux-saga/effects'

export function* productsData(){
    let data = yield fetch('https://fakestoreapi.com/products');
    data = yield data.json();
    yield put({type:FETCHEDDATA,data})
}

export function* searchProductsData(searchterm){
    let data = yield fetch(`https://fakestoreapi.com/products/category/${searchterm.data}`)
    data = yield data.json();
    yield put({type:FETCHEDDATA,data})
}

export function* getData(){
    yield takeEvery(PRODUCTSDATA,productsData)
    yield takeEvery(ONSEARCH,searchProductsData)
}


// https://fakestoreapi.com/products/category/jewelery