import React, {useState, useEffect} from "react";
import HotItems from "../components/HotItems";
import SliderContainer from "../containers/SliderContainer"

const HotItemsTile = props => {

  const [hotItems, setHotItems] = useState([]);

  useEffect(()=> {
    fetch(`/api/v1/products`)
      .then(response => {
        if(response.ok) {
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
        setHotItems(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  // console.table(hotItems);

    let hotItemsArr = [];
    hotItems.map(category => {
      let categoriesArr = [];
      hotItems.map(hotItem => {
        if(hotItem.category_id === category.id) {
          categoriesArr.push(hotItem);
        }
      });
      categoriesArr.sort(() => Math.random() - 0.5);
      hotItemsArr.push(categoriesArr[0]);
    });
    let finalHotItems = []
    for(let i = 0; i < 4; i++) {
      let item = hotItemsArr.shift()
      finalHotItems.push(item)
    }

  console.log(finalHotItems)
     
  const mapHotItems = hotItems.map(hotItem => {
    return (
      <HotItems
      key={hotItem.id}
      item={hotItem}
      // hotItem={hotItemsArr} 
      />
    )
  })

  if(finalHotItems[0] != undefined) {

    return (
      <>
      <h2>Hot Items!</h2>
      {/* {mapHotItems} */}
      <SliderContainer 
        products={finalHotItems}
        // category={props.category.name}
        />
    </>
  )
  } else {
    return ""
  }
}

export default HotItemsTile

// fetch categories
// fetch 1 product from each category