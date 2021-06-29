import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card px-4 py-2">
              <div className="image">
                <img src={image} alt={title}/>
              </div>
              <div className="content">
                <h1 className="header">{title}</h1>
                <h1 className="meta price">$ {price}</h1>
                <h1 className="meta">{category.toUpperCase()}</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
