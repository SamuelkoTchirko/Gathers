//const config = require("../config/auth.config");
const db = require("../models");
const Event = db.event;

const verify_token = require("../middlewares/verify_token")

var jwt = require("jsonwebtoken");
//var bcrypt = require("bcryptjs");

//const config = require("../config/auth.config");


exports.create = (req, res) => {
  const event = new Event({
    title: req.body.title,
    date_start: req.body.date_start,
    date_end: req.body.date_end,
    creator_id: verify_token.verify(req.get("x-access-token")).id,
    public_event: req.body.public_event
  });

  event.save((err, event) => {
    if (err) {
      res.status(500);
      console.log("Event failed to save to database!" + err);
      return;
    }else{ 
        res.status(200);
        console.log("Event was saved to database succesfully!");
    }
  });
}

exports.delete = (req, res) => {
  var id = verify_token.verify(req.get("x-access-token")).id;
  Event.findById(req.params.id, "creator_id", function (err, data) {
    if(err){
      console.log(err)
      return
    }else{
      return data
    }
  }).then((data, err) => {
    if(id != data.creator_id){
      console.log("Tento event moze vymazat iba jeho spravca")
      return res.status(400).send("Tento event moze vymazat iba jeho spravca");
    }else{
      Event.findByIdAndDelete(req.params.id, function (err, data) {
        if(err){
          console.log(err)
          return;
        }else{
          res.send(data)
        }
      });
    }
  });
}

exports.getMyEvents = (req, res) => {
  Event.find({ creator_id: verify_token.verify(req.get("x-access-token")).id}, function (err, data) {
    if(err){
      console.log(err)
      return;
    }else{
      res.send(data)
    }
  });
}
