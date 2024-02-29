const mongoose = require("mongoose");

const Message = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", Message);
