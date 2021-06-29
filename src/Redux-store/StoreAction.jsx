import axios from "axios";
import { SET_PRODUCT, SELECT_PRODUCT, REMOVE_PRODUCT } from './StoreType'

export const removeProduct = () => {
    return {
        type: REMOVE_PRODUCT
    }
}

export const selectProduct = (id) => async (dispatch) => {
    const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
            alert(`😞 ${err.message} 😞`);
        });
    dispatch({ type: SELECT_PRODUCT, payload: response.data });
}

export const setProduct = () => async (dispatch) => {
    const response = await axios
        .get(`https://fakestoreapi.com/products/`)
        .catch((err) => {
            alert(`😞 ${err.message} 😞`);
        });
    dispatch({type: SET_PRODUCT, payload: response.data});
}