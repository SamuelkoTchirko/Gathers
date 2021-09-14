const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.event = require("./event.model");
db.event_participant = require("./event_participant.model")

//db.ROLES = ["user", "admin", "moderator"];

module.exports = db;