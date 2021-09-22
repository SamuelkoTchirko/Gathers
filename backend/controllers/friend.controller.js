//const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
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

exports.getRequests = (req, res) => {
  var id = verify_token.verify(req.get("x-access-token")).id;

  var response_field = []

  Friend.find({ confirmed: false , second_user_id: id})
    .then(users => {
      var fn = function asyncFunction(v){
        return new Promise((resolve, reject) => {
          var modified_item = {
            user_id: String,
            username: String,
            request_id: String,
            confirmed: Boolean
          }
      
          var new_item = modified_item 
          new_item.user_id = null
          new_item.username = null
          new_item.request_id = null
          new_item.confirmed = null

          if(v.first_user_id == id){
            User.find({_id: v.second_user_id}, "_id username" , function (err, data){
              if(data){
                new_item.user_id = data[0]._id
                new_item.username = data[0].username
                new_item.request_id = v._id
                new_item.confirmed = v.confirmed

                resolve(new_item)
              }
            })
          }else{
            User.find({_id: v.first_user_id}, "_id username" , function (err, data){
              if(data){
                new_item.user_id = data[0]._id
                new_item.username = data[0].username
                new_item.request_id = v._id
                new_item.confirmed = v.confirmed

                resolve(new_item)
              }
            })
          }
        })
      };

      var changeResponse = Promise.all(users.map(fn)).then(
        data => res.send(data)
      )
    })
    .catch(error => {
      console.log(error)
    })
}
