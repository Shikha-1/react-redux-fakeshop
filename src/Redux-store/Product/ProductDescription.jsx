import React, { useEffect } from 'react'
import {removeProduct, selectProduct } from '../StoreAction'
import { useParams } from 'react-router';
import { useDispatch, useSelector} from "react-redux";

function ProductDescription() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);
  const {title, image, price, category, description } = item;
  
  useEffect(() => {
      if (id && id !== "") dispatch(selectProduct(id));
      return () => {
        dispatch(removeProduct());
      };
  }, [id, dispatch]);
  
    return (
    <div className="ui grid container">
        {Object.keys(item).length === 0 ? (
        <div><h1>Loading... Please Wait!</h1></div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">$ {price}</p>
                </h2>
                <h3 className="ui brown block header">{category.toUpperCase()}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescription
