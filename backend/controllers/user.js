// Import variable from models
let User = require("../models/user");
// Variable to encrypt passwords
let bcrypt = require("bcrypt-nodejs");
// Import JWT
let jwt = require("../libs/jwt");

// Function to register a new user
const registerUser = (req, res) => {
  // Import JSON data
  let params = req.body;
  // Create a clean user model
  let user = new User();
  if (
    params.names &&
    params.lastName &&
    params.pass &&
    params.age &&
    params.role
  ) {
    bcrypt.hash(params.pass, null, null, function (err, hash) {
      // If it encrypts, hash works
      if (hash) {
        user.names = params.names;
        user.lastName = params.lastName;
        user.pass = hash;
        user.age = params.age;
        user.role = params.role;
        // Register with MongoDB
        user.save((err, saveUser) => {
          if (err) {
            res.status(500).send({ err: "The User was not registered" });
          } else {
            res.status(200).send({ user: saveUser });
          }
        });
      } else {
        // Provide response if encryption fails
        res
          .status(400)
          .send({ err: "Could not encrypt password, cannot register User" });
      }
    });
  } else {
    // Validate incoming JSON data
    res.status(405).send({ err: "Fields are incomplete" });
  }
};

// Login Function
const login = (req, res) => {
  let params = req.body;
  // Search for user in DB
  User.findOne({ names: params.names }, (err, userData) => {
    if (err) {
      res.status(500).send({ message: "Server Error" });
    } else {
      if (userData) {
        bcrypt.compare(params.pass, userData.pass, function (err, confirm) {
          if (confirm) {
            if (params.getToken) {
              res.status(200).send({ jwt: jwt.createToken(userData) });
            } else {
              res.status(200).send({ User: userData, message: "No Token!" });
            }
          } else {
            res.status(401).send({ message: "Name or Password Incorrect" });
          }
        });
      } else {
        res.status(401).send({ message: "Name or Password Incorrect" });
      }
    }
  });
};
// Export the module
module.exports = {
  registerUser,
  login,
};
