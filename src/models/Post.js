const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({  
  post: String, 
  hrDt: String, 
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  }
});

module.exports = mongoose.model("post", PostSchema);
