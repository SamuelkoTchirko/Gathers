const path = require("path");
const express = require("express");
const cors = require('cors');
const router = express.Router();
const { urlencoded } = require("express");
router.use(cors())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const User = require("../models/userModel.js"); 
const { userInfo } = require("os");

router.post("/", async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const user = new User({
        nickname: req.body.nickname,
        password: req.body.password
    })
    try {
        const newUser = await user.save()
    } catch {
        res.send("Error")
    }
})

module.exports = router;