import React from "react"
import { Link } from "react-router-dom"

const ProductTile = (props) => {
  const { id, name, description, price, image_url } = props.product

  return (
    <div>
      <div>
        <h3>
          Name:
          <Link to={`/store/${props.category}/${id}`}>{name}</Link>
        </h3>

        <p>Price: ${price}</p>
        <p>Description: {description}</p>

        <Link to={`/${name}/${id}`}>
          <img src={image_url} alt={name} height="100" width="100" />
        </Link>
      </div>
    </div>
  )
}

export default ProductTile
