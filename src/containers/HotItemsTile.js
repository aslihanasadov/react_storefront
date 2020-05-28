import React, { useState, useEffect } from "react"
import SliderContainer from "../containers/SliderContainer"

const HotItemsTile = (props) => {
  const [hotItems, setHotItems] = useState([])

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
        setHotItems(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  let hotItemsArr = []
  hotItems.map((category) => {
    let categoriesArr = []
    hotItems.map((hotItem) => {
      if (hotItem.category_id === category.id) {
        categoriesArr.push(hotItem)
      }
    })
    categoriesArr.sort(() => Math.random() - 0.5)
    hotItemsArr.push(categoriesArr[0])
  })

  let finalHotItems = []
  for (let i = 0; i < 4; i++) {
    let item = hotItemsArr.shift()
    finalHotItems.push(item)
  }

  if (finalHotItems[0] != undefined) {
    return (
      <>
        <h2>Hot Items!</h2>
        <SliderContainer products={finalHotItems} />
      </>
    )
  } else {
    return ""
  }
}

export default HotItemsTile
