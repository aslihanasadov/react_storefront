import React from "react"
import { Link } from "react-router-dom"

const HotItemSlide = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  let formattedPrice = formatter.format(props.product.price)
  
  return (
    <div className="item-slider">
      <div className="product-card">
        <div className="product-card-thumbnail">
          <Link to={`/store/${props.category}/${props.product.id}`}>
            <img src={props.product.image_url} height="100" width="100" />
          </Link>
        </div>

        <h2 className="product-card-title">
          <Link to={`/store/${props.category}/${props.product.id}`}>
            {props.product.name}
          </Link>
        </h2>
        <span className="product-card-desc">{props.product.description}</span>
        <span className="product-card-price">{formattedPrice}</span>
      </div>
    </div>
  )
}
export default HotItemSlide
