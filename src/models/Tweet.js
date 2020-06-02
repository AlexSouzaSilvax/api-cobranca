const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  texto: String,
  data: String,  
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  }
});

module.exports = mongoose.model("tweet", TweetSchema);
