import { SET_PRODUCT, SELECT_PRODUCT, REMOVE_PRODUCT} from './StoreType'

const initialstate = {
    products: []
}
export const Productreducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case SET_PRODUCT:
            return {
                ...state,
                products: payload 
            }
        default:
            return state;
    }
}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SELECT_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};