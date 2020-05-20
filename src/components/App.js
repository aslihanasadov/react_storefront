import React from "react"
import { Route, Switch, BrowserRouter, Link, Redirect } from "react-router-dom"
import IndexCategories from "../containers/IndexCategories"
import Footer from "./Footer"
import NavBar from "./NavBar"
import AddProductForm from "./AddProductForm"

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
          <Route exact path="/store/tops" />
          <Route exact path="/store/bottoms" />
          <Route exact path="/store/sportsBras" />
          <Route exact path="/store/shoes" />
          <Route exact path="/store/new" component={AddProductForm}/>
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
