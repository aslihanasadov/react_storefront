import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import StateList from "./StateList"
import ErrorList from "./ErrorList"

const PurchaseForm = (props) => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  })
  const [toHome, setToHome] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const stateOptions = [""].concat(StateList).map((state) => {
    return (
      <option key={state} value={state}>
        {state}
      </option>
    )
  })

  const handleInputChange = (event) => {
    setAddress({
      ...address,
      [event.currentTarget.id]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validForSubmission()) {
      fetch("/api/v1/purchase", {
        method: "POST",
        body: JSON.stringify(props.cookies),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            setSubmitted(true)
            props.removeAllCookies()
          } else {
            let errorMessage = `${response.statues} (${response.statusText})`,
              error = new Error(errorMessage)
            throw error
          }
        })
        .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zipCode",
      "phoneNumber",
      "email",
    ]

    requiredFields.forEach((field) => {
      if (address[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  if (props.reveal) {
    if (!submitted) {
      return (
        <div>
          <ErrorList errors={errors} />
          <form
            autoComplete="off"
            id="purchaseForm"
            className="callout form-format"
            onSubmit={handleSubmit}
          >
            <h3>Enter Shipping information to complete your purchase</h3>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                id="firstName"
                className="firstName"
                value={address.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                id="lastName"
                className="lastName"
                value={address.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                id="address"
                className="address"
                value={address.address}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="city">City: </label>
              <input
                type="text"
                id="city"
                className="city"
                value={address.city}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="state">State:</label>
              <select
                id="state"
                onChange={handleInputChange}
                value={address.state}
              >
                {stateOptions}
              </select>
            </div>

            <div>
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                type="text"
                id="zipCode"
                className="zipCode"
                value={address.zipCode}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                className="email"
                value={address.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                className="phoneNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                value={address.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="submit"
                className="hollow button success"
                value="Complete Purchase"
              />
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Thank you for your purchase</h1>
          <div className="hidden">
            {setTimeout(() => setToHome(true), 3000)}
            {toHome ? <Redirect to="/" /> : null}
          </div>
        </div>
      )
    }
  } else {
    return ""
  }
}

export default PurchaseForm
