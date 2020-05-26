import React, {useState, useEffect} from "react";
import HotItems from "../components/HotItems";

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
  // console.log(hotItems);

//    let hotItemsArr = [];
//     hotItems.category_id.forEach(category => {
//       let categoriesArr = [];
//       hotItems.forEach(hotItem => {
//         if(hotItem.category_id === category.id) {
//           categoriesArr.push(hotItem);
//         }
//       });
//       categoriesArr.sort(() => Math.random() - 0.5);
//       hotItemsArr.push(categoriesArr[0]);
//     });
//   
//   console.log(hotItemsArr);

  const mapHotItems = hotItems.map(hotItem => {
    return (
      <HotItems
      key={hotItem.id}
      productName={hotItem.name} 
      imgUrl={hotItem.image_url}
      category={hotItem.category_id}
      item={hotItem}
      />
      
    )
  })

  return (
    <>
      <h2>Hot Items!</h2>
      {mapHotItems}
    </>
  )
}

export default HotItemsTile

// fetch categories
// fetch 1 product from each category