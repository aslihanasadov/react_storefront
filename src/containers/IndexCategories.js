import React, { Fragment, useState, useEffect } from "react";
import CategoriesTile from "../components/CategoriesTile"

const IndexCategories = props => {
    const [allCategories, setAllCategories] = useState ([]);

  useEffect(() => {
    fetch(`/api/v1/categories`, {
      headers: {
        "Content-Type": "application/json",
        credentials: "same-origin"
      }
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
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const mapCategories = allCategories.map(category => (
      <CategoriesTile
          key={category.id}
          id={category.id}
          name={category.name}
      />
  ))

  return (
      <Fragment>
          <h2>What are you looking for today?</h2>
          <div>{mapCategories}</div>
      </Fragment>
  )
}

export default IndexCategories;