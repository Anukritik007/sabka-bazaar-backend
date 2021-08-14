const express = require("express");
const cors = require("cors");

const banners = require("./Data/banners.json");
const products = require("./Data/products.json");
const categories = require("./Data/categories.json");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.get("/banners", (_, res) => {
  res.json(banners);
});

app.get("/products", (_, res) => {
  res.json(products);
});

app.get("/categories", (_, res) => {
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
