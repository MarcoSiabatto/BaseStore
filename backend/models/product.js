// Import Mongoose
let mongoose = require("mongoose");
// Module for node/express
let Schema = mongoose.Schema;
// User Schema
let productSchema = Schema({
    names: String,
    description: String,
    price: Number,
});

// Export the module
module.exports = mongoose.model("product", productSchema);
