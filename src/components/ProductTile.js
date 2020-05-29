import React from "react"
import { Link } from "react-router-dom"

const ProductTile = (props) => {
  const { id, name, description, price, image_url } = props.product

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  let formattedPrice = formatter.format(price)

  return (
    <div className="column">
      <div className="card-user-container rows">
        <div className="card-user-avatar">
          <Link to={`/store/${props.category}/${id}`}>
            <img src={image_url} alt={name} class="user-image" />
          </Link>
        </div>

        <div className="card-user-bio">
          <Link to={`/store/${props.category}/${id}`}>
            <h4>{name}</h4>
          </Link>
          <p>{description}</p>
          <p>{formattedPrice}</p>
        </div>

        <div className="card-user-button">
          <Link to={`/store/${props.category}/${id}`}>
            <a href="#" className="hollow button">
              VIEW PRODUCT
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductTile
