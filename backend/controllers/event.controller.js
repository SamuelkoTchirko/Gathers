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

exports.login = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      //Treba nastavit expiration time -- { expiresIn: 86400 } -- 24hodin
      var token = jwt.sign({ id: user.id }, config.secret);

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    });
};