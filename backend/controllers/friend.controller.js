//const config = require("../config/auth.config");
const db = require("../models");
const Friend = db.friend;

const verify_token = require("../middlewares/verify_token")
const check_friend = require("../middlewares/check_friend")

var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");

//const config = require("../config/auth.config");

exports.createRequest = (req, res) => {
    var id = verify_token.verify(req.get("x-access-token")).id;

    check_friend.check_friend(id, req.body.id).then(value => {

      console.log("Request alebo priatelstvo uz existuje"+ value)
      res.status(500).send(value)

    }, reason => {
      const friend = new Friend({
        first_user_id: id,
        second_user_id: req.body.id,
        confirmed: false
      });
      
      friend.save((err, friend) => {
        if (err) {
          res.status(500);
          console.log("Friend request failed on backend controller" + err);
          return;
        }else{ 
          res.status(200).send(true);
          console.log("Friend request was sent successfully!");
        }
      });
    })
}

exports.checkRequest = (req, res) => {
  
}