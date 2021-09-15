const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date_start: {
        type: Date,
        required: true
    },
    creator_id: {
        type: String,
        required: true
    },
    date_end: {
        type: Date,
        required: true
    },
    public_event: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Event", eventSchema)