//const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

const verify_token = require("../middlewares/verify_token")
const check_friend = require("../middlewares/check_friend")


var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");

//const config = require("../config/auth.config");

exports.findByUsername = (req, res) => {
    var id = verify_token.verify(req.get("x-access-token")).id;

    var response_field = []

    function asyncFunction (item, cb) {
        var modified_item = {
            _id: String,
            username: String,
            confirmed: Boolean
        }

        var new_item = modified_item 
        new_item._id = null
        new_item.username = null
        new_item.confirmed = null
        //console.log(item._id)
        setTimeout(() => {
            check_friend.check_friend(id, item._id).then(value => {

                new_item._id = item._id
                new_item.username = item.username
                new_item.confirmed = value[0].confirmed

                //console.log(new_item)

                response_field = [...response_field, new_item]

                //console.log("stalo sa")
                
                cb() 
          
            }, reason => {
                //console.log("aj tu")

                new_item._id = item._id
                new_item.username = item.username
                new_item.confirmed = null

                //console.log(new_item)

                response_field = [...response_field, new_item]

                cb()
            })
        }, 100);
    } 

    if(id){
        User.find({"username": {"$regex": req.params.query, "$options": "i"}}, "_id username", function (err, data) {
            if(!data.length){
                console.log(err)
                res.status(404).send(err)
                return;
            }else{

                data.forEach((item, index, arr) => {
                    if(id == item._id){
                        data.splice(index, 1)
                    }
                })

                data.reduce((promiseChain, item) => {
                    return promiseChain.then(() => new Promise((resolve) => {
                      asyncFunction(item, resolve);
                    }));
                }, Promise.resolve()).then(() => res.status(200).send(response_field));
                
                //data.then(() => console.log(data))
                //res.status(200).send(response_field)
            }
        });
    }else{
        res.status(500).send("Nedostatocne prava")
    }
}
