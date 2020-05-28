import React from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const App = (props) => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>

      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
