import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import _ from "lodash"

const CategoriesTile = props => {
  const name = _.startCase(props.name)
  
  return(
    <div>
      <div>
        <h3>{name}</h3>
        <Link to={`store/${props.name}`}>
          <p>Category Image??</p>
        </Link>
      </div>
    </div>
  )
}

export default CategoriesTile;