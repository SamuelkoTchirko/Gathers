//const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

const verify_token = require("../middlewares/verify_token")

var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");

//const config = require("../config/auth.config");

exports.findByUsername = (req, res) => {
    var id = verify_token.verify(req.get("x-access-token")).id;

    if(id){
        User.find({"username": {"$regex": req.params.query, "$options": "i"}}, "_id username", function (err, data) {
            if(err){
                console.log(err)
                res.status(404).send(err)
                return;
            }else{
                res.status(200).send(data)
            }
        });
    }else{
        res.status(500).send("Nedostatocne prava")
    }
}
