import React, { useState } from "react"

const AddProductForm = props => {
    const defaultForm = {
        name:"",
        category:"",
        price:"",
        description:"",
        image_url:""
    }

    const [newForm, setNewForm] = useState(defaultForm)
    const [message, setMessage] = useState("")

    const handleChange = event => {
       setNewForm({
           ...newForm, 
           [event.currentTarget.id]: event.currentTarget.value
       }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        let formPayload = {
            name: newForm.name,
            category:newForm.category,
            price: newForm.price,
            description: newForm.description,
            image_url:newForm.image_url,
            inventoryCount: 5 
        }

            fetch(`/api/v1/new_product`, {
                method: "POST",
                body: JSON.stringify(formPayLoad),
                headers: { "Content-Type": "application/json" }
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
                setPark(json)
              })
              .catch((error) => {
                console.log(error)
              })
        
        props.setShowForm(false)
        setNewForm(defaultForm)
        setMessage("Thank you for purchase")
    }

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
        <div>
        <form onSubmit={handleSubmit}></form>
        <div className="small-12 medium-6 columns">
            <label>Name</label>
            <input name="name" id="name" type="text" onChange={handleChange} value={newForm.name} />
        </div>
        <div className="small-12 medium-6 columns">
            <label>Category</label>
            <select name="category" id="category" value={newForm.category} onChange={handleChange}>
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
            <input name="price" id="price" type="text" onChange={handleChange} value={newForm.price} />
        </div>
        <div className="small-12 medium-6 columns">
            <label>Description</label>
            <input name="description" id="description" type="text" onChange={handleChange} value={newForm.description} />
        </div>
        <div className="small-12 medium-6 columns">
            <label>Image</label>
            <input name="image_url" id="image_url" type="text" onChange={handleChange} value={newForm.image_url} />
      </div>
           <div className="small-12 columns">
              <input name="button" type="submit" className="button" />
            </div>
      </div>
      </div>
    )
}
export default AddProductForm
