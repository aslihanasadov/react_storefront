import React, { useState, useEffect, Fragment } from 'react'
import ProductTile from './ProductTile'

const Search=(props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [products, setProducts] = useState([])

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        fetch("/api/v1/products")
        .then((response) => {
        if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw error;
          }
    })
    .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSearchResults(data)
      })
      .catch((error) => {
        error.text().then((errorMessage) => {
          this.props.dispactch(displayError(errorMessage));
        });
      });
    }, []);


useEffect(() => {
    const results = products.filter(park => 
        product.category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
}, [searchTerm]);

const lastIndex = searchResults.length - 1
const listSearchResults = searchResults.map((product, i) => {
    let productAvailability = ""
    let productClass = ""
    
    if(product.exceptionName != null) {
        productAvailability = product.exceptionName
        productClass = "available"
    } else {
        productAvailability = "no"
        productClass = "not available"
    }

    let lastColumn = ""
    if(i === lastIndex) {
        lastColumn = "end"
    } else {
        lastColumn = "next"
    }

    return (
        <ProductTile 
        key = {product.id}
        data ={products}
        name = {product.name}
        lastColumn={lastColumn}
        />
    )
})

    return(
       <Fragment>
           <div className="search-bar">
               <h3 className="search-bar-title">Search by Category</h3>
               <input
               type="text"
               placeholder="Search by Category"
               value={searchTerm}
               onChange={handleSearchChange}
               />
           </div>
           <div className="search-results">
           </div>
       </Fragment> 
    )
    }

export default Search
