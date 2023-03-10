const route = require("express").Router();
const products = require("../db/products-data.json");

route.get("/product/:id", (req, res) => {
	const id = req.params.id;
	const targetProduct = products.find((product) => product.id == id);
	res.render("product", targetProduct);
});

module.exports = route;
