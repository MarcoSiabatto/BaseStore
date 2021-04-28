// Import stock model
let Stock = require("../models/stock");

// Register stock
const registerStock = (req, res) => {
  let params = req.body;
  // Instance stock model
  let stock = new Stock();
  // Validate field before registering
  if (params.productId && params.quantity) {
      // Send data to the model
      stock.productId = params.productId;
      stock.quantity = params.quantity;
      // Register Stock
      stock.save((err, stockData)=>{
          if (err) {
              res.status(500).send({message: "Error connecting to the server"});
          } else {
              if (stockData) {
                  res.status(200).send({stock: stockData});
              } else {
                  res.status(401).send({message: "Stock could not be registered"})
              }
          }
      })
  } else {
      res.status(401).send({message: "You are missing fields!"});
  }
};

// Export modules
module.exports = {
    registerStock,
}