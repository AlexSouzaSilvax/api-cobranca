//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const Tweet = require("../models/Tweet");

module.exports = {
  //Listar
  async index(req, res) {
    const { _idUsuario } = req.body;
    //console.log("AQUI= " + _idUsuario);
    let tweet = await Tweet.find({ usuario: _idUsuario });
    return res.json(tweet);
  },  
  //Criar
  async store(req, res) {
    const { texto, data, usuario } = req.body;

    let tweet = await Tweet.create({
      texto,
      data,
      usuario
    });

    return res.json(tweet);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let tweet = await Tweet.findByIdAndDelete({
      _id
    });

    return res.json(tweet);
  }
};
