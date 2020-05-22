import React, { Fragment, useState, useEffect } from "react"
import CategoriesTile from "../components/CategoriesTile"
import ProductTile from "../components/ProductTile"

const IndexCategories = (props) => {
  const [allCategories, setAllCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [productSearchResults, setProductSearchResults] = useState([])

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
        setSearchResults(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetch(`/api/v1/products`, {
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
        setAllProducts(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const categoryResults = allCategories.filter((category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSearchResults(categoryResults)
  }, [searchTerm])

  useEffect(() => {
    const productResults = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setProductSearchResults(productResults)
  }, [searchTerm])

  const handleSearchChange = (event) => {
    setSearchTerm(event.currentTarget.value)
  }

  const listCategoryResults = searchResults.map((category) => {
    return (
      <CategoriesTile key={category.id} id={category.id} name={category.name} />
    )
  })

  let listProductResults
  if (searchTerm.length !== 0) {
    listProductResults = productSearchResults.map((product) => {
      return <ProductTile key={product.id} product={product} />
    })
  }

  return (
    <Fragment>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <h2>What are you looking for today?</h2>
      <div>{listCategoryResults}</div>
      <div>{listProductResults}</div>
    </Fragment>
  )
}

export default IndexCategories
