import React, { useState } from "react"

const AddProductForm = props => {
    const defaultForm = {
        name:"",
        category:"",
        price:"",
        description:""
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
            description: newForm.description  
        }
        props.addNewForm(formPayload)
        props.setShowForm(false)
        setNewForm(defaultForm)
        setMessage("Thank you for purchase")
    }

    return(
        <div>
        <form onSubmit={handleSubmit}></form>
        <div className="small-12 medium-6 columns">
            <label>Name</label>
            <input name="name" id="name" type="text" onChange={handleChange} value={newForm.name} />
        </div>
        <div className="small-12 columns">
              <input name="button" type="submit" className="button" />
            </div>
        </div>

    )
}
export default AddProductForm
