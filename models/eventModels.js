const mongoose = require('mongoose');

const eventModel = new mongoose.Schema(
    {
        poster: {
            type: String,
            required: [true, "An event must have a poster name"]
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        event: {
            type: String,
            required: [true, "A short event description must be provided"]
        },
        eventDescription: {
            type: String,
            required: [true, "A full event description must be provided"]
        }
    }
)


module.exports = eventModel = mongoose.model("eventModel", eventModel);