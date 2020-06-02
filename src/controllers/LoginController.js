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
    const { login, senha } = req.body;

    let user = await User.findOne({
      login,
      senha
    });

    return res.json(user);
  },

  //Criar
  async store(req, res) {
    const { nome, email, login, senha } = req.body;

    //let user = await User.findOne({ login, senha }); //verifica se o usuario já esta cadastrado
    user = await User.create({
      nome: nome,
      email: email,
      login: login,
      senha: senha
    });
    
    console.log(user);

    return res.json(user);
  },

  //Atualizar
  async update(req, res) {
    const { _id, nome, email, login, senha } = req.body;

    const filtro = { _id };
    const atualizacao = { nome, email, login, senha };

    let user = await User.findOneAndUpdate(filtro, atualizacao);

    user = await User.findOne({
      _id
    });

    res.json(user);
  },

  //esqueciSenha
  async esqueciSenha(req, res) {
    const { email, senha } = req.body;

    const atualizacao = { senha };

    let user = await User.findOne({ email });

    //console.log("AQUI: " + user._id);
    const { _id } = user;

    const filtro = { _id };

    user = await User.findOneAndUpdate(filtro, atualizacao);
    //console.log("AQUI2: " + user);

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
