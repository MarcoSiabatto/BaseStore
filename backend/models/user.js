// Import Mongoose
let mongoose = require("mongoose");
// Module for node/express
let mongoose = mongoose.Schema;
// User Schema
let userSchema = Schema({
    names: String,
    lastName: String,
    description: String,
    age: Number,
    role: String,
});

// Export the module
module.exports = mongoose.model("user", userSchema);
