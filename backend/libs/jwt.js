// Import JWT Simple
let jwt = require("jwt-simple");
// Import Moment
let moment = require("moment");
// Secret pass to use
let secret = "MissPepita";

exports.createToken = function (user){
    let payload={
        _id: user._id,
        names: user.names,
        lastName: user.lastName,
        age: user.age,
        role: user.role,
        iat: moment().unix(),
    }
    return jwt.encode(payload, secret);
};