const mongoose = require("mongoose");


const friendSchema = new mongoose.Schema({
    first_user_id: {
        type: String,
        required: true
    },
    second_user_id: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Friend", friendSchema)