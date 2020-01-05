const mongoose = require("mongoose");

const TituloSchema = new mongoose.Schema({
  descricao: String,
  valor: String,
  dataVenc: String,
  status: String
});

module.exports = mongoose.model("titulo", TituloSchema);
