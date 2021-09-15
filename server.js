if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const cors = require('cors');
const { urlencoded } = require("express");
const bodyParser = require("body-parser");

const app = express(); // create express app

//Pouzijeme CORS
app.use(cors({origin: true}))

//Body requestu bude v URLke
//app.use(express.urlencoded({extended: true}))

//Body requestu bude vo formate JSON
app.use(express.json());
app.use(bodyParser.urlencoded({limit:"10mb", extended: true}))


//Importujeme userRouter pre cesty s /users ktore bude kontrolovat iny .js subor
require("./backend/routes/auth.routes")(app);
require("./backend/routes/event.routes")(app);
//const userRouter = require("./src/controllers/userController.js")
//app.use("/users" , userRouter);


//Database setup
/*async function main() {
  const MongoClient = require('mongodb').MongoClient;
  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect((err) => {
    //const collection = client.db('test').collection('devices');
  });
}
main().catch(console.error);*/

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {
    console.log('Connected to Mongoose');
});

app.listen(8110)
