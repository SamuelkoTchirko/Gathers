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



const User = require("../models/userModel"); 

router.post("/", (req, res) => {
    req.header("Access-Control-Allow-Origin", "*");
    console.log(req.body.nickname)
    console.log(req.body.password);
    console.log("haha")
    const user = new User({
        nickname: req.body.nickname,
        password: req.body.password
    })
    user.save((err, newUser) => {
        if(err){
            console.log("Error "+err);
        }
    })
    //console.log(user)
})

module.exports = router;