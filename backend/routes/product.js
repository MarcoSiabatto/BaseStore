// Import express
let express = require("express");
// Import controller for product
let Product = require("../controllers/product");
// Import multiparty
let multiparty = require("connect-multiparty");
// Import path
let path = multiparty({loads: "./uploads/productimg"})

// Create API to control routes
let api = express.Router();

// Api Routes
api.post("/product/registerProduct", path, Product.registerProduct);
api.get("/product/searchProduct/:id", Product.searchProduct);
api.get("/product/listProduct/:names?", Product.listProduct);
api.put("/product/editProduct/:id", Product.editProduct);
api.delete("/product/deleteProduct/:id", Product.deleteProduct);

// Export module
module.exports = api;