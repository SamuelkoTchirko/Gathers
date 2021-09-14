const mongoose = require("mongoose");


const eventParticipantSchema = new mongoose.Schema({
    event_id: {
        type: int,
        required: true
    },
    participant_id: {
        type: int,
        required: true
    }
})

module.exports = mongoose.model("Event_Participant", eventParticipantSchema)