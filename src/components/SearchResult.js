import React from "react"
import { Link } from "react-router-dom"

const SearchResult = (props) => {
  if (props.product) {
    let categoryName
    if (props.product.category_id === 1) {
      categoryName = "tops"
    } else if (props.product.category_id === 2) {
      categoryName = "bottoms"
    } else if (props.product.category_id === 3) {
      categoryName = "sportsBras"
    } else if (props.product.category_id === 4) {
      categoryName = "shoes"
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    })

    let formattedPrice = formatter.format(props.product.price)

    return (
      <div className="people-you-might-know">
        <div className="row add-people-section">
          <div className="small-12 medium-6 columns about-people">
            <div className="about-people-avatar" onClick={props.clickItem}>
              <Link to={`/store/${categoryName}/${props.product.id}`}>
                <img
                  className="avatar-image"
                  src={props.product.image_url}
                  alt={props.product.name}
                />
              </Link>
            </div>

            <div className="about-people-author">
              <Link to={`/store/${categoryName}/${props.product.id}`}>
                <p className="author-name" onClick={props.clickItem}>
                  {props.product.name}
                </p>
              </Link>
              <Link to={`/store/${categoryName}/${props.product.id}`}>
                <p className="author-location">
                  <i className="fas fa-caret-right"></i>
                  <span> </span>
                  {formattedPrice}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (props.category) {
    let categoryName = _.startCase(props.category.name)
    return (
      <div className="people-you-might-know">
        <div className="row add-people-section">
          <div className="small-12 medium-6 columns about-people">
            <div className="about-people-avatar" onClick={props.clickItem}>
              <Link to={`/store/${props.category.name}`}>
                <img
                  className="avatar-image"
                  src={`icons/${props.category.name}.png`}
                  alt={props.category.name}
                />
              </Link>
            </div>

            <div className="about-people-author" onClick={props.clickItem}>
              <Link to={`/store/${props.category.name}`}>
                <p className="author-name" onClick={props.clickItem}>
                  {categoryName}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default SearchResult
