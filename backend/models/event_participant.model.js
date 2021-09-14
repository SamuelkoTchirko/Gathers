const mongoose = require("mongoose");


const eventParticipantSchema = new mongoose.Schema({
    event_id: {
        type: Number,
        required: true
    },
    participant_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Event_Participant", eventParticipantSchema)