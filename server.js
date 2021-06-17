const path = require("path");
const express = require("express");
const cors = require('cors')

const app = express(); // create express app

app.use(cors())

app.get("/user/logged", function(req, res) {  
  res.send(true);
})

app.listen(8110)
//