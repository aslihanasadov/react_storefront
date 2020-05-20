import React, { useState } from "react"

const ProductInfo = (props) => {
  const [quantity, setQuantity] = useState(1)

  let purchaseButton
  let name
  let description
  let price
  let imageUrl
  let inventoryCount
  if (props.product) {
    name = props.product.name
    description = props.product.description
    price = props.product.price
    imageUrl = props.product.image_url
    inventoryCount = props.product.inventory_count
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  let formattedPrice = formatter.format(price)

  const purchase = (event) => {
    event.preventDefault()
    if (quantity <= inventoryCount) {
      props.addToCart(props.product.id, quantity)
    } else {
      alert(`Sorry there are only ${inventoryCount} available at this time`)
    }
  }

  if (inventoryCount > 0) {
    purchaseButton = (
      <button
        type="button"
        className="hollow button success"
        onClick={purchase}
      >
        Add to Cart
      </button>
    )
  } else {
    purchaseButton = (
      <button type="button" className="hollow button alert" disabled>
        Out of Stock
      </button>
    )
  }
  const handleInputChange = (event) => {
    setQuantity(event.currentTarget.value)
  }

  if (props.product) {
    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} alt={name} height="100" width="100" />
        <p>{description}</p>
        <p>{formattedPrice}</p>
        <div>
          <form>
            <div className="row">
              <div className="large-2 medium-3 small-3 columns end">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="number"
                  step="1"
                  name="quantity"
                  id="quantity"
                  defaultValue="1"
                  onChange={handleInputChange}
                />
                {purchaseButton}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default ProductInfo
