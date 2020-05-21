import React, {useEffect, useState} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";

const HotItemsTile = props => {
  const name = _.startCase(props.name)
  const [hotItems, setHotItems] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/hotItems`, {
      headers: {
        "Content-Type": "application/json",
        credentials: "same-origin"
      }
    })
        .then((res) => {
          if (res.ok) {
            return res;
          } else {
            let errorMessage = `${res.status} (${res.statusText})`,
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

  const mapHotItems = hotItems.map(products => (
      <HotItemsTile
          key={products.id}
          id={products.id}
          name={products.name}
          category={products.category}
          picture={products.image}
      />
  ))

  return (
      <div>
        <h2>Hot Items!</h2>
        <Link to={`store/${props.name}`}>
          {/*links to individual show page*/}
          <ul>
            <li>{mapHotItems}</li>
          </ul>
        </Link>
      {/*  list of name, category, picture*/}
      </div>
  )
}

export default HotItemsTile