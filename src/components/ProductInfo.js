import React, { useState, useEffect } from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"

const ProductInfo = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [addItem, setAddItem] = useState(false)
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const [lowInventory, setLowInventory] = useState(false)

  let purchaseButton
  let available
  let name
  let description
  let price
  let imageUrl
  let inventoryCount
  if (props.product) {
    name = props.product.name
    description = props.product.description
    price = props.product.price
    imageUrl = props.product.image_url
    inventoryCount = props.product.inventory_count
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }))

  const classes = useStyles()

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  let formattedPrice = formatter.format(price)

  const purchase = (event) => {
    event.preventDefault()
    if (quantity <= inventoryCount) {
      let name = props.product.id
      let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
      if (match) {
        setAlreadyAdded(true)
      } else {
        props.addToCart(props.product.id, quantity)
        setAddItem(true)
      }
    } else {
      setLowInventory(true)
    }
  }

  if (inventoryCount > 0) {
    available = `${inventoryCount} available`
    purchaseButton = (
      <button
        type="button"
        className="hollow button success"
        onClick={purchase}
      >
        Add to Cart
      </button>
    )
  } else {
    purchaseButton = (
      <button type="button" className="hollow button alert" disabled>
        Out of Stock
      </button>
    )
  }
  const handleInputChange = (event) => {
    setQuantity(event.currentTarget.value)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setAddItem(false)
    setAlreadyAdded(false)
    setLowInventory(false)
  }

  if (props.product) {
    return (
      <div>
        <div>
          <div class="basic-card">
            <div class="basic-card-image">
              <img src={imageUrl} alt={name} />
            </div>
            <div class="basic-card-content content callout secondary">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div class="links callout primary">
              <div class="menu">
                <span>
                  <label>{available}</label>
                </span>
                <span>
                  <label htmlFor="quantity">Quantity: </label>
                  <input
                    type="number"
                    step="1"
                    name="quantity"
                    id="quantity"
                    defaultValue="1"
                    onChange={handleInputChange}
                  />
                </span>
                <span>{purchaseButton}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={addItem}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              {name} added to cart!
            </Alert>
          </Snackbar>
        </div>

        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={alreadyAdded}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="warning">
              This item is already in your cart
            </Alert>
          </Snackbar>
        </div>

        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={lowInventory}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              Sorry there are only {inventoryCount} left in stock
            </Alert>
          </Snackbar>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default ProductInfo
