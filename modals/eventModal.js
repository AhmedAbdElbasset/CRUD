const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title name is required"],
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  date: {
    type: Date,
    required: [true, "Date is required and must be in the future"],
    validate: {
      validator:  (value)=> {
        return value > new Date()
      },
      message: "The date must be in the future.",
    },
  },
  location: {
    type: String,
    required: [true, 'location is required'],
    maxlength: 100,
  },
  attendees: {
    type: [String],
    default: []
  }
});

const Event = mongoose.model("Event", eventSchema);


module.exports = Event;
