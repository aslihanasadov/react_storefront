import React from "react"
import { Route, Switch, BrowserRouter, Link, Redirect } from "react-router-dom"
import IndexCategories from "../containers/IndexCategories"
import Footer from "./Footer"
import NavBar from "./NavBar"
import AddProductForm from "./AddProductForm"
import ProductIndex from "../containers/ProductIndex"
import ProductShow from "../containers/ProductShowContainer"
import ShoppingCartContainer from "../containers/ShoppingCartContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>

      <div className="paths">
        <Switch>
          <Redirect exact path="/" to="/store" />
          <Route exact path="/store" component={IndexCategories} />
          <Route exact path="/store/cart" component={ShoppingCartContainer} />
          <Route exact path="/store/new" component={AddProductForm} />
          <Route exact path="/store/:category" component={ProductIndex} />
          <Route exact path="/store/:category/:id" component={ProductShow} />
          <Route exact path="/store/cart" component={ShoppingCartContainer} />
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
