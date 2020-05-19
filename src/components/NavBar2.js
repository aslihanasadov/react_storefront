import React from "react"
import { Link, BrowserRouter } from "react-router-dom"

const NavBar2 = (props) => {
  return (
    <BrowserRouter>
      <nav class="top-bar topbar-responsive">
        <div class="top-bar-title">
          <span
            data-responsive-toggle="topbar-responsive"
            data-hide-for="medium"
          >
            <button class="menu-icon" type="button" data-toggle></button>
          </span>
          <a class="topbar-responsive-logo" href="#">
            <strong>Apprenti Wear</strong>
          </a>
        </div>
        <div id="topbar-responsive" class="topbar-responsive-links">
          <div class="top-bar-right">
            <ul class="menu simple vertical medium-horizontal">
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
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <button
                  type="button"
                  class="button hollow topbar-responsive-button"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  )
}

export default NavBar2
