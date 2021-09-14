
var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");

const config = require("../config/auth.config");

exports.verify = (token) => {
    try {
        var decoded = jwt.verify(token, 'wrong-secret');
        return decoded
    } catch(err) {
        return err
    }
}