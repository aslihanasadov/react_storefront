import React, { Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const listCategories = allCategories.map((category) => {
    return (
      <div className="column">
        <div className="card-user-container rows">
          <div className="card-user-avatar">
            <Link to={`/store/${category.name}`}>
              <img
                src={`icons/${category.name}.png`}
                alt=""
                class="user-image"
              />
            </Link>
          </div>

          <div className="card-user-bio">
            <Link to={`/store/${category.name}`}>
              <h4>{_.startCase(category.name)}</h4>
            </Link>
          </div>

          <div className="card-user-button">
            <Link to={`/store/${category.name}`}>
              <a href="#" className="hollow button">
                VIEW PRODUCTS
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  return (
    <Fragment>
      <div>
        <HotItemsTile />
      </div>

      <div className="row small-up-1 medium-up-2 large-up-4">
        {listCategories}
      </div>
    </Fragment>
  )
}

export default IndexCategories
