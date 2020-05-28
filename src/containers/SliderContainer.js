import React, { useState, useEffect } from "react"
import HotItemsSlide from "../components/HotItemsSlide"
import Slider from "react-slick"

const SliderContainer = (props) => {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(props.products)
  }, [props])

  const allProducts = list.map((product) => {
    let category
    if (product.category_id === 1) {
      category = "tops"
    } else if (product.category_id === 2) {
      category = "bottoms"
    } else if (product.category_id === 3) {
      category = "sportsBras"
    } else if (product.category_id === 4) {
      category = "shoes"
    }
    return (
      <HotItemsSlide key={product.id} product={product} category={category} />
    )
  })

  return (
    <div className="wrapper-slider">
      <div className="row">
        <div className="review-slider">
          <Slider
            dots={true}
            arrows={false}
            autoplay={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {allProducts}
          </Slider>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
export default SliderContainer
