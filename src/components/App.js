import React from "react"
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import IndexCategories from "../containers/IndexCategories";
import Footer from "./Footer"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="">
        <h1 className="title">
          React Storefront
        </h1>
        <div className="paths">
          <Switch>
            <Route exact path="/store" component={IndexCategories} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
