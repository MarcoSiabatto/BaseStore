# BaseStore
Basic store backend repo, with connections to DB. Miss Pepita's Store LOL
# Schemas for Database
let userSchema = Schema({
    names: String,
    lastName: String,
    description: String,
    age: Number,
    role: String,
});
let productSchema = Schema({
    names: String,
    description: String,
    price: Number,
});
let stockSchema = Schema({
    productId: {type: Schema.ObjectId, ref: "product"},
    quantity: Number,
});
