// Import mongoose
let mongoose = require("mongoose");
// Module for node/express
let Schema = mongoose.Schema;
// User Schema
let userSchema = Schema({
    names: String,
    lastName: String,
    pass: String,
    age: Number,
    role: String,
});

// Export the module
module.exports = mongoose.model("user", userSchema);