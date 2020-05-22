import React from "react"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import AddProductForm from "./AddProductForm"
import ProductIndex from "../containers/ProductIndex"
import ProductShow from "../containers/ProductShowContainer"
import ShoppingCartContainer from "../containers/ShoppingCartContainer"
import IndexCategories from "../containers/IndexCategories"

const NavBar = (props) => {
  return (
    <div>
      <nav className="scrollhide-nav">
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Apprenti Wear</li>
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i>
                </Link>
              </li>
              <li>
                <a href="#">Categories</a>
                <ul className="menu vertical">
                  <li>
                    <Link to="/store/tops">Tops</Link>
                  </li>
                  <li>
                    <Link to="/store/bottoms">Bottoms</Link>
                  </li>
                  <li>
                    <Link to="/store/sportsBras">Sports Bras</Link>
                  </li>
                  <li>
                    <Link to="/store/shoes">Shoes</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/store/new">Sell</Link>
              </li>
              <li>
                <Link to="/store/cart">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
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
    </div>
  )
}

export default NavBar
