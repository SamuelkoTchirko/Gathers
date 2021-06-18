if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const cors = require('cors');
const { urlencoded } = require("express");
const bodyParser = require("body-parser");

const app = express(); // create express app
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const userRouter = require("./src/controllers/userController.js")
app.use("/users" , userRouter);



//Database setup
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    /*useUnifiedTopology: true*/
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {
    console.log('Connected to Mongoose');
});

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' == req.method) {
     res.sendStatus(200);
   }
   else {
     next();
   }});*/

app.use(bodyParser.urlencoded({limit:"10mb", extended: false}))


//Testing routes
app.get("/user/logged", function(req, res) {  
  res.send(false);
})


app.listen(8110)