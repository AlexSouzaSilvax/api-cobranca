const mongoose = require("mongoose");

const FeedBackSchema = new mongoose.Schema({
  email: String,
  feedback: String,
  dataCompleta: String
});

module.exports = mongoose.model("FeedBack", FeedBackSchema);
