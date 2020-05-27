import React from "react";

const ProductList = (props) => {
  const { name } = props.data
  return (
    <div className={`small-12 medium-4 columns ${props.lastColumn}`}>
      <div>
          <div>
            <img src={image_url} alt={name}/>
            <p className={`status-title ${props.products}`}></p>
          </div>
          <div>
            <h2>{name}</h2>
            <p>{product.name}</p>
          </div>
      </div>
    </div>
  );
};
export default ProductList