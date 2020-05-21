import React, { useState } from "react"

const ShoppingCartItem = (props) => {
  const [newQuantity, setNewQuantity] = useState("")
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  const remove = () => {
    event.preventDefault()
    props.remove(props.product.id)
  }

  const update = () => {
    event.preventDefault()
    if (newQuantity <= props.product.inventory_count) {
      props.updateQuantity(props.product.id, newQuantity)
    } else {
      alert(`Sorry there are only ${props.product.inventory_count} available`)
    }
  }

  const handleInputChange = (event) => {
    setNewQuantity(event.currentTarget.value)
  }

  let formattedPrice = formatter.format(props.product.price)

  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>Quantity: {props.quantity}</p>
      <p>{formattedPrice}</p>
      <img src={props.product.image_url} width="100" height="100" />
      <button type="button" className="button hollow alert" onClick={remove}>
        Remove
      </button>
      <div className="row">
        <div className="large-2 medium-3 small-3 columns end">
          <form>
            <label htmlFor="quantity">Update Quantity:</label>
            <input
              type="number"
              step="1"
              name="quantity"
              id="quantity"
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
      </div>
      <button type="button" className="button hollow success" onClick={update}>
        Update Quantity
      </button>
    </div>
  )
}

export default ShoppingCartItem
