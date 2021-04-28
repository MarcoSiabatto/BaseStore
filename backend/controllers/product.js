// Import product model
let Product = require("../models/product");

// Register a new Product
const registerProduct = (req, res) => {
  let params = req.body;
  // New instance to register
  let product = new Product();
  product.names = params.names;
  product.description = params.description;
  product.price = params.price;
  // Save to Mongo DB
  product.save((err, saveProduct) => {
    if (err) {
      res.status(500).send({ message: "Error connecting to the server" });
    } else {
      if (saveProduct) {
        res.status(200).send({ product: saveProduct });
      } else {
        res.status(401).send({ message: "Could not register the new Product" });
      }
    }
  });
};

// Search for a product
const searchProduct = (req, res) => {
  let id = req.params["id"];
  // Search for the product by its id
  Product.findById({ _id: id }, (err, productData) => {
    if (err) {
      res.status(500).send({ message: "Error connecting to the server" });
    } else {
      if (productData) {
        res.status(200).send({ product: productData });
      } else {
        res.status(401).send({ message: "Product not found or doesn't exist" });
      }
    }
  });
};

// Consult products with or without filter
const listProduct = (req, res) => {
  let names = req.params["names"];
  // Search in product
  Product.find({ names: new RegExp(names, "i") }, (err, productData) => {
    if (err) {
      res.status(500).send({ message: "Error connecting to the server" });
    } else {
      if (productData) {
        res.status(200).send({ product: productData });
      } else {
        res
          .status(401)
          .send({ message: "Product not found or does not exist" });
      }
    }
  });
};

// Edit products
const editProduct = (req, res) => {
  let id = req.params["id"];
  // Obtain all data from API
  let params = req.body;
  // Search by Id and Edit
  Product.findByIdAndUpdate(
    { _id: id },
    { names: params.names, description: params.description },
    (err, productData) => {
      if (err) {
        res.status(500).send({ message: "Error connecting to the server" });
      } else {
        if (productData) {
          res.status(200).send({ product: productData });
        } else {
          res.status(401).send({ message: "Product cannot be edited" });
        }
      }
    }
  );
};

// Delete a product
const deleteProduct = (req, res) => {
    let id = req.params["id"];
    // Delete a product by id
    Product.findByIdAndDelete({_id: id}, (err, productData)=>{
        if (err) {
            res.status(500).send({message: "Error connecting to the server"});
        } else {
            if (productData) {
                res.status(200).send({product: productData});
            } else {
                res.status(401).send({message: "Product could not be deleted"})
            }
        }
    });
};

// Export modules
module.exports = {
    registerProduct,
    searchProduct,
    listProduct,
    editProduct,
    deleteProduct,
};