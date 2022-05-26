const mongoose = require("mongoose");

const LancamentoSchema = new mongoose.Schema({  
  tipo: String, 
  descricao: String, 
  valor: String, 
  mensal: Boolean, 
  pagamento: String, 
  parcelas: String, 
  dataPagamento: String, 
  mesReferencia: String, 
  dataVencimento: String, 
  observacao: String,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario"
  }
});

module.exports = mongoose.model("lancamento", LancamentoSchema);
