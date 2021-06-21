const path = require("path");
const express = require("express");
const cors = require('cors');
const router = express.Router();
const { urlencoded } = require("express");
const mongoose = require("mongoose");


router.use(cors())



const User = require("../models/userModel"); 

router.post("/", (req, res) => {
    console.log(req.body.nickname)
    console.log(req.body.password)
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