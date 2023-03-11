const route = require("express").Router();
const products = require("../db/products-data.json");

route.get("/product/:id", (req, res) => {
	const id = req.params.id;
	const targetProduct = products.find((product) => product.id == id);
	res.render("product", targetProduct);
});
route.get("/product/search/:searchText", (req, res) => {
	const searchText = req.params.searchText;
	const productsDataToSearch = products.map((p) => {
		return Object.values(p);
	});
	let result = [];
	for (const data of productsDataToSearch) {
		if (data.includes(searchText)) result.push(data[0]);
	}
	const productsToSend = products.filter((p) => result.includes(p.id));
	res.render("searchPage", { productsToSend });
	res.redirect(`/api/product/search/${searchText}`);
});

module.exports = route;
