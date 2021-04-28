// Import express
let express = require("express");
// Import controller
let Stock = require("../controllers/stock");

// Generate API with router
let api = express.Router();

// Generate api Routes
api.post("/stock/registerStock", Stock.registerStock);

// Export the module
module.exports = api;