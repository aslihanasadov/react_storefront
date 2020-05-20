import React, { useState, useEffect } from "react"
import ProductInfo from "../components/ProductInfo"

const ProductShow = (props) => {
  const [product, setProduct] = useState({})
  const productId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/products/${productId}`)
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
        setProduct(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const addToCart = (productId, quantity) => {
    const cookieString = `${productId}=${quantity}`
    document.cookie = cookieString
  }

  return (
    <div>
      <ProductInfo product={product[0]} addToCart={addToCart} />
    </div>
  )
}

export default ProductShow
