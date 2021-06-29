import {Productreducer, selectedProductsReducer} from './StoreReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    allProducts: Productreducer,
    item: selectedProductsReducer
})
export default rootReducer;