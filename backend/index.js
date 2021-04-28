let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// Connection to port
let port = process.env.PORT || 3002;
// App variable
let app = express();

// Routes
let User = require("./routes/user");
let Product = require("./routes/product");
let Stock = require("./routes/stock");

// Database connection
mongoose.connect(
  "mongodb://localhost:27017/BaseStore",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("Database Server: ON");
      app.listen(port, function () {
        console.log("Backend server Running on Port: " + port);
      });
    }
  }
);

// Analyze the URL's
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes API's
app.use("/api", User);
app.use("/api", Product);
app.use("/api", Stock);

// Export module
module.exports = app;
