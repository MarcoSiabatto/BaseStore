// Import express
let express = require("express");
// Import Controller for User
let User = require("../controllers/user");

// Create the API
let api = express.Router();

// Post service to register
api.post("/user/registerUser", User.registerUser);
// Post service to Login
api.post("/login", User.login);

// Export the module
module.exports = api;
