const mongoose = require("mongoose");

const AulaSchema = new mongoose.Schema({  
  data: String, 
  hora: String, 
  numeroAula: String,
  concluida: Boolean,
  disciplina: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "disciplina"
  }
});

module.exports = mongoose.model("aula", AulaSchema);
