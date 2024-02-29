const mongoose = require("mongoose");

const User = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    min: 4,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", User);
