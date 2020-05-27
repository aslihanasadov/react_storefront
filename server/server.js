const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const _ = require("lodash")
const createError = require("http-errors")

const app = express()

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs",
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const { Pool } = require("pg")

const pool = new Pool({
  connectionString:
    "postgres://postgres:password@127.0.0.1:5432/react_storefront",
})

// Express routes
app.get("/api/v1/products", (req, res) => {
  pool
    .query("SELECT * FROM products")
    .then((result) => {
      return res.json(result.rows)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get("/api/v1/categories", (req, res) => {
  pool
    .connect()
    .then((client) => {
      client.query("SELECT * FROM categories").then((result) => {
        const categories = result.rows
        client.release()
        res.json(categories)
      })
    })
    .catch((error) => {
      console.log("ERROR =====> ", error)
    })
})

app.get("/api/v1/:category", (req, res) => {
  let category = req.params.category
  pool
    .query(
      "SELECT products.* FROM categories JOIN products ON products.category_id = categories.id WHERE categories.name = $1",
      [category]
    )
    .then((result) => {
      return res.json(result.rows)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get("/api/v1/products/:id", (req, res) => {
  let productId = req.params.id
  pool
    .query("SELECT * FROM products WHERE id = $1", [productId])
    .then((result) => {
      return res.json(result.rows)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.post("/api/v1/purchase", (req, res) => {
  let products = req.body
  products.forEach((product) => {
    pool
      .query(
        "UPDATE products SET inventory_count = inventory_count - $1 WHERE id = $2",
        [product.quantity, product.productId]
      )
      .then((result) => {
        return res.json(result.rows)
      })
      .catch((error) => {
        console.log(error)
      })
  })
})

app.post("/api/v1/new_product", (req, res) => {
  const {
    name,
    description,
    price,
    inventory_count,
    image_url,
    categoryId,
  } = req.body
  pool
    .query(
      "INSERT INTO products(name, description, price, inventory_count, image_url, category_id) VALUES($1, $2, $3, $4, $5, $6)",
      [name, description, price, inventory_count, image_url, categoryId]
    )
    .then((result) => {
      return res.json(result.rows)
    })
    .catch((error) => {
      console.log(error)
    })
})

//Express Routes
app.get("/", (req, res) => {
  res.redirect("/store")
})

app.get("*", (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
