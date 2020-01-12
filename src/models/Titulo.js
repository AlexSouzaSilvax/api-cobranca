const mongoose = require("mongoose");

const TituloSchema = new mongoose.Schema({
  descricao: String,
  valor: String,
  dataVenc: String,
  status: String,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  }
});

module.exports = mongoose.model("titulo", TituloSchema);
