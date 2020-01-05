//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const User = require("../models/User");

module.exports = {
  //Listar
  async index(req, res) {
    let user = await User.find();

    return res.json(user);
  },

  //Buscar
  async show(req, res) {
    const { login } = req.body;

    let user = await User.findOne({
      login: login
    });

    return res.json(user);
  },

  //Criar
  async store(req, res) {
    const { email, login, senha } = req.body;

    //let user = await User.findOne({ login, senha }); //verifica se o usuario já esta cadastrado

    user = await User.create({
      email: email,
      login: login,
      senha: senha
    });

    return res.json(user);
  },

  //Atualizar
  async update(req, res) {
    const { _id, email, login, senha } = req.body;

    const filtro = { _id };
    const atualizacao = { email, login, senha };

    let user = await User.findOneAndUpdate(filtro, atualizacao);

    user = await User.findOne({
      _id
    });

    res.json(user);
  },

  //Apagar
  async destroy(req, res) {
    const { id } = req.body;

    let user = await User.findByIdAndDelete({
      _id: id
    });

    return res.json(user);
  }
};
