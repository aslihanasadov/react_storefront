import React, { useState, useEffect } from "react"
import ShoppingCartItem from "../components/ShoppingCartItem"

const ShoppingCartContainer = (props) => {
  const [allProductList, setAllProductList] = useState({})
  const [updateCart, setUpdateCart] = useState(false)
  const [open, setOpen] = useState(false)
  let cookies = []
  let productsInCart = []
  let total = 0

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  useEffect(() => {
    fetch(`/api/v1/products`)
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then((result) => {
        return result.json()
      })
      .then((json) => {
        setAllProductList(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  let allCookies = document.cookie.split(";")
  for (let I = 0; I < allCookies.length; I++) {
    let product = {
      productId: parseInt(allCookies[I].split("=")[0]),
      quantity: parseInt(allCookies[I].split("=")[1]),
    }
    cookies.push(product)
  }

  const remove = (item) => {
    event.preventDefault()
    document.cookie = `${item}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
    setUpdateCart(!updateCart)
  }

  const updateQuantity = (item, quantity) => {
    event.preventDefault()
    document.cookie = `${item}=${quantity}`
    setUpdateCart(!updateCart)
  }

  if (allProductList.length > 0) {
    cookies.sort((a, b) => a.productId - b.productId)
    cookies.forEach((cookie) => {
      allProductList.forEach((item) => {
        if (item.id === cookie.productId) {
          let tile = (
            <ShoppingCartItem
              key={item.id}
              product={item}
              quantity={cookie.quantity}
              remove={remove}
              updateQuantity={updateQuantity}
            />
          )
          productsInCart.push(tile)
          total += item.price * cookie.quantity
        }
      })
    })
  }

  return (
    <div>
      {productsInCart}
      <h2 className="cart-total">Order Total: {formatter.format(total)}</h2>
    </div>
  )
}

export default ShoppingCartContainer
