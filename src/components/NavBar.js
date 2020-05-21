import React from "react"
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom"
import IndexCategories from "../containers/IndexCategories"

const NavBar = (props) => {
  return (
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
              <Link to="/new">Sell</Link>
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
  )
}

export default NavBar
