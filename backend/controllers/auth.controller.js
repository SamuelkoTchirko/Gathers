//const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
//const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const config = require("../config/auth.config");

exports.register = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
        res.status(200).send({ message: "User was registered successfully!"});
        console.log("User was registered succesfully!");
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
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    });
};