import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduct } from "../StoreAction";

const ProductList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setProduct())
  });
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductList;