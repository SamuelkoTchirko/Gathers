if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const cors = require('cors');
const { urlencoded } = require("express");

const app = express(); // create express app

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {
    console.log('Connected to Mongoose');
});


app.use(cors())
app.use(express.urlencoded({extended: false}))

app.get("/user/logged", function(req, res) {  
  res.send(false);
})

app.listen(8110)