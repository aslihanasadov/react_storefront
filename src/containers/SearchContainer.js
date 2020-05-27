import React, { Fragment, useState, useEffect } from "react"
import CategoriesTile from "../components/CategoriesTile"
import ProductTile from "../components/ProductTile"
import SearchResult from "../components/SearchResult"

const SearchContainer = (props) => {
  const [allCategories, setAllCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categorySearchResults, setCategorySearchResults] = useState([])
  const [productSearchResults, setProductSearchResults] = useState([])
  const [clicked, setClicked] = useState(false)

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
    setCategorySearchResults(categoryResults)
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

  const clickItem = (event) => {
    setSearchTerm("")
    setClicked(!clicked)
  }

  let listCategoryResults
  if (searchTerm.length !== 0) {
    listCategoryResults = categorySearchResults.map((category) => {
      return (
        <SearchResult
          key={category.id}
          category={category}
          clickItem={clickItem}
        />
      )
    })
  }

  let listProductResults
  if (searchTerm.length !== 0) {
    listProductResults = productSearchResults.map((product) => {
      return (
        <SearchResult
          key={product.id}
          product={product}
          clickItem={clickItem}
        />
      )
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
      <div>{listCategoryResults}</div>
      <div>{listProductResults}</div>
    </Fragment>
  )
}

export default SearchContainer
