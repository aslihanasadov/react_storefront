import React from "react"
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom"

const NavBar = (props) => {
  return (
    <BrowserRouter>
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
                    <Link to="/tops">Tops</Link>
                  </li>
                  <li>
                    <Link to="/bottoms">Bottoms</Link>
                  </li>
                  <li>
                    <Link to="sports_bras">Sports Bras</Link>
                  </li>
                  <li>
                    <Link to="shoes">Shoes</Link>
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
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Redirect exact path="/" to="/store" />
        <Route exact path="/store" />
        <Route exact path="/tops" />
        <Route exact path="/bottoms" />
        <Route exact path="/sports_bras" />
        <Route exact path="/shoes" />
      </Switch>
    </BrowserRouter>
  )
}

export default NavBar
