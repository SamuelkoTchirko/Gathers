const path = require("path");
const express = require("express");
const cors = require('cors');
const router = express.Router();
const { urlencoded } = require("express");
const mongoose = require("mongoose");


router.use(cors({origin: true}))

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//const User = require("../models/user.model"); 

router.post("/register", (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save((err, newUser) => {
        if(err){
            console.log("Error nastal v userController, error: "+err);
        }
    })
    //console.log(user)
})

module.exports = router;