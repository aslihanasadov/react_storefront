import React, { useState, useEffect, Fragment } from 'react'
// import ProductTile from './ProductTile'
import ProductList from './ProductList'

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
          this.props.dispatch(displayError(errorMessage));
        });
      });
    }, []);


useEffect(() => {
    const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
}, [searchTerm]);

//     searchHandler(event){
//     let keyword =event.target.value;
//     let filtered=this.state.allData.filter((item)=>{
//       return item.companyName.indexOf(keyword) > -1
//     });
//     if (keyword === "") {
//       filtered = [];
//     }
//     this.setSearchResults({
//       filtered
//     })
//   }

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
        <ProductList 
        key={product.id} 
        name={product.name}
        // products={products}
        // productAvailability={productAvailability}
        // lastColumn={lastColumn}
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
