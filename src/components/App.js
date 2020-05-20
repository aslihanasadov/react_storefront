import React from "react"
import { Route, Switch, BrowserRouter, Link, Redirect } from "react-router-dom"
import IndexCategories from "../containers/IndexCategories"
import Footer from "./Footer"
import NavBar from "./NavBar"
import ProductIndex from "../containers/ProductIndex"

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
          <Route exact path="/store/:category" component={ProductIndex}/>
          <Route exact path="/new" />
          <Route exact path="/cart" />
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
