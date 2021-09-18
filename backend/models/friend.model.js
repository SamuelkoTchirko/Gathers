const mongoose = require("mongoose");


const friendSchema = new mongoose.Schema({
    first_user_id: {
        type: Number,
        required: true
    },
    second_user_id: {
        type: Number,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Friend", friendSchema)