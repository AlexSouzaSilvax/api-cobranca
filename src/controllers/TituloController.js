//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const Titulo = require("../models/Titulo");

module.exports = {
  //Listar
  async index(req, res) {
    let titulo = await Titulo.find();
    return res.json(titulo);
  },
  //Buscar
  async show(req, res) {
    const { _id } = req.body;

    let titulo = await Titulo.findOne({
      _id
    });

    return res.json(titulo);
  },
  //Criar
  async store(req, res) {
    const { descricao, valor, dataVenc, status } = req.body;

    let titulo = await Titulo.create({
      descricao: descricao,
      valor: valor,
      dataVenc: dataVenc,
      status: status
    });

    return res.json(titulo);
  },
  //Atualizar
  async update(req, res) {
    const { _id, descricao, valor, dataVenc, status } = req.body;

    if (_id) {
      const filtro = { _id };
      const atualizacao = { descricao, valor, dataVenc, status };
      let titulo = await Titulo.findOneAndUpdate(filtro, atualizacao);
    } else {
      let titulo = await Titulo.create({
        descricao: descricao,
        valor: valor,
        dataVenc: dataVenc,
        status: status
      });
    }

    titulo = await Titulo.findOne({
      _id
    });

    res.json(titulo);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let titulo = await Titulo.findByIdAndDelete({
      _id
    });

    return res.json(titulo);
  }
};
