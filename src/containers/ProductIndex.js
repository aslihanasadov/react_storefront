import React, { useState, useEffect } from "react"
import ProductTile from "../components/ProductTile"

const ProductIndex = (props) => {
  const [list, setList] = useState([])
  const category = props.match.params.category

  useEffect(() => {
    fetch(`/api/v1/${category}`)
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
        setList(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const listByProdCat = list.map((product) => {
    return (
      <ProductTile key={product.id} product={product} category={category} />
     
    )
  })

  return (
    <div>
      <div>
        <h4>{listByProdCat}</h4>
      </div>
    </div>
  )
}

export default ProductIndex
