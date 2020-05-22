import React, { useState } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"

const ShoppingCartItem = (props) => {
  const [newQuantity, setNewQuantity] = useState("")
  const [open, setOpen] = useState(false)
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })

  const remove = () => {
    event.preventDefault()
    props.remove(props.product.id)
  }

  const update = () => {
    event.preventDefault()
    if (newQuantity <= props.product.inventory_count) {
      props.updateQuantity(props.product.id, newQuantity)
    } else {
      alert(`Sorry there are only ${props.product.inventory_count} available`)
    }
  }

  const handleInputChange = (event) => {
    setNewQuantity(event.currentTarget.value)
  }

  const deleteProduct = (event) => {
    event.preventDefault()
    openDialog()
  }

  const accept = () => {
    setOpen(false)
    remove()
  }

  const cancel = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const openDialog = () => {
    setOpen(true)
  }

  let formattedPrice = formatter.format(props.product.price * props.quantity)

  return (
    <div>
      <div className="travel-feature-card">
        <div className="travel-feature-card-header">
          <div className="row">
            <div className="medium-12 columns">
              <h5 className="travel-feature-card-subtitle">
                {props.product.name}
              </h5>
              <div className="travel-feature-card-header-controls">
                <span>
                  <a href="#">
                    <i className="fa fa-remove" onClick={deleteProduct}></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="travel-feature-card-details">
          <h6 className="travel-feature-card-date-range"></h6>

          <div className="row">
            <div className="small-12 medium-9 columns travel-feature-card-content">
              <div className="row">
                <div className="small-4 medium-2 columns">
                  <img
                    className="travel-feature-card-image"
                    src={props.product.image_url}
                    alt={props.product.name}
                  />
                </div>
                <div className="small-8 medium-10 columns">
                  <p>{props.product.description}</p>
                </div>
              </div>
            </div>

            <div className="small-12 medium-3 columns travel-feature-card-price">
              <h6>{formattedPrice}</h6>
              <p className="travel-feature-card-price-subtext">
                Quantity: {props.quantity}
              </p>
              <form>
                <label htmlFor="quantity">Update Quantity:</label>

                <input
                  type="number"
                  step="1"
                  className="quantity"
                  id="quantity"
                  defaultValue={props.quantity}
                  onChange={handleInputChange}
                />

                <button
                  type="button"
                  className="button hollow success"
                  onClick={update}
                >
                  Update Quantity
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Remove from Cart"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove {props.product.name} from your
              cart?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancel} color="primary">
              No
            </Button>
            <Button onClick={accept} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default ShoppingCartItem
