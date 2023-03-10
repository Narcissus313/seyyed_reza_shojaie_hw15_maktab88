const express = require("express");
const app = express();
const { join } = require("path");
const products = require("./db/products-data.json");
const apiRoute = require("./router/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoute);

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.get("/home", (_req, res) => {
	return res.render("home", { products });
});
app.get("/about", (_req, res) => res.render("about"));
app.get("/contact", (_req, res) => res.render("contact"));
app.get("/product", (_req, res) => res.render("product"));
app.get("/*", (_req, res) => res.status(400).send("not found"));

app.listen(5012);
