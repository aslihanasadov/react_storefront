import React from "react"
import { Link } from "react-router-dom"
const HotItemSlide = (props) => {
  return (
    <div className="item-slider">
      <Link to={`/store/${props.category}/${props.product.id}`}> 
        <p>{props.product.name}</p>
      </Link>
      <img src={props.product.image_url} height="100" width="100" />
      <p>{props.product.description}</p>
    </div>
  )
}
export default HotItemSlide