const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({  
  disciplina: String, 
  descricao: String, 
  qtdHoras: String, 
  qtdAulas: Number,
  qtdAulasRealizadas: Number,
  qtdAulasRestantes: Number,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  }
});

module.exports = mongoose.model("disciplina", DisciplinaSchema);
