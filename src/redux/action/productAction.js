import {GET_PRODUCT, PRODUCT_ERR} from '../types'
import axios from "axios";

export const getProduct = () => async dispatch => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: PRODUCT_ERR,
            payload: console.log(e),
        })
    }
}