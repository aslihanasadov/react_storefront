import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { json } from "body-parser"
const AddProductForm = (props) => {
  const defaultForm = {
    name: "",
    category: "",
    price: "",
    description: "",
    image_url: "",
    count: "",
  }
  const [newForm, setNewForm] = useState(defaultForm)
  const [toHome, setToHome] = useState(false)
  const [newProductId, setNewProductId] = useState(0)
  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let category
    if (newForm.category === "tops") {
      category = 1
    }
    if (newForm.category === "bottoms") {
      category = 2
    }
    if (newForm.category === "sportsBras") {
      category = 3
    }
    if (newForm.category === "shoes") {
      category = 4
    }
    let formPayload = {
      name: newForm.name,
      categoryId: category,
      price: newForm.price,
      description: newForm.description,
      image_url: newForm.image_url,
      inventory_count: newForm.count,
    }

    fetch(`/api/v1/new_product`, {
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: { "Content-Type": "application/json" },
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
        setNewProductId(json[0].id)
        setToHome(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="small-12 medium-6 columns">
            <label>Name</label>
            <input
              name="name"
              id="name"
              type="text"
              onChange={handleChange}
              value={newForm.name}
            />
          </div>
          <div className="small-12 medium-6 columns">
            <label>Category</label>
            <select
              name="category"
              id="category"
              onChange={handleChange}
              value={newForm.category}
            >
              <option type="text" value="">
                -
              </option>
              <option type="text" value="tops">
                Tops
              </option>
              <option type="text" value="bottoms">
                Bottoms
              </option>
              <option type="text" value="sportsBras">
                Sports Bras
              </option>
              <option type="text" value="shoes">
                Shoes
              </option>
            </select>
          </div>
          <div className="small-12 medium-6 columns">
            <label>Price</label>
            <input
              name="price"
              id="price"
              type="text"
              onChange={handleChange}
              value={newForm.price}
            />
          </div>
          <div className="small-12 medium-6 columns">
            <label>Description</label>
            <input
              name="description"
              id="description"
              type="text"
              onChange={handleChange}
              value={newForm.description}
            />
          </div>
          <div className="small-12 medium-6 columns">
            <label>Image</label>
            <input
              name="image_url"
              id="image_url"
              type="text"
              onChange={handleChange}
              value={newForm.image_url}
            />
          </div>
          <div className="small-12 medium-6 columns">
            <label>Count</label>
            <input
              name="count"
              id="count"
              type="number"
              onChange={handleChange}
              value={newForm.count}
            />
          </div>
          <div className="small-12 columns">
            <input
              name="button"
              type="submit"
              className="button"
              value="Submit Your Item"
            />
          </div>
        </form>
      </div>
      <div>
        {toHome ? (
          <Redirect to={`/store/${newForm.category}/${newProductId}`} />
        ) : null}
      </div>
    </div>
  )
}
export default AddProductForm
