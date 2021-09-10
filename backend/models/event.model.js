const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    creator_id: {
        type: int,
        required: true
    }
})

module.exports = mongoose.model("Event", eventSchema)