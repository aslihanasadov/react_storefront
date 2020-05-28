import React, { Fragment, useState, useEffect } from "react"
import CategoriesTile from "../components/CategoriesTile"
import HotItemsTile from "./HotItemsTile"

const IndexCategories = (props) => {
  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    fetch(`/api/v1/categories`, {
      headers: {
        "Content-Type": "application/json",
        credentials: "same-origin",
      },
    })
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
        setAllCategories(json)
        setCategorySearchResults(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const listCategoryResults = allCategories.map((category) => {
    return (
      <CategoriesTile key={category.id} id={category.id} name={category.name} />
    )
  })


  return (
      <Fragment>
        <div>
          <HotItemsTile />
        </div>
        <h2>What are you looking for today?</h2>
        <div>{mapCategories}</div>
      </Fragment>
  )
}

export default IndexCategories
