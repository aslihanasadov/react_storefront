import React, { useState, useEffect } from "react"
import SliderContainer from "../containers/SliderContainer"

const HotItemsTile = (props) => {
  const [hotItems, setHotItems] = useState([])

  useEffect(() => {
    fetch(`/api/v1/hot_items`)
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
        setHotItems(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  let finalItems = []
  let randomItems = hotItems.sort(() => Math.random() - 0.5)

  hotItems.forEach((item) => {
    let cat = randomItems.filter(
      (product) => product.category_id === item.category_id
    )
    if (
      finalItems.filter((category) => category.category_id === item.category_id)
        .length === 0
    ) {
      finalItems.push(cat[0])
    }
  })

  if (finalItems[0] != undefined) {
    return (
      <>
        <h2 className="hot-item-title">Hot Items!</h2>
        <div id="border">
          <SliderContainer products={finalItems} />
        </div>
      </>
    )
  } else {
    return ""
  }
}

export default HotItemsTile
