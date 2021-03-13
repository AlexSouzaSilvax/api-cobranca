//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const Post = require("../models/Post");

module.exports = {
  //Listar
  async index(req, res) {
    const { usuario } = req.body;
    let post = await Post.find({ usuario: usuario });
    return res.json(post);
  },  
  //Criar
  async store(req, res) {
    const { post, hrDt, usuario } = req.body;

    let posts = await Post.create({
      post,
      hrDt,
      usuario
    });

    return res.json(posts);
  },
  async update(req, res) {
    const { _id, post, hrDt, usuario } = req.body;

    if (_id) {
      const filtro = { _id };
      const atualizacao = { post, hrDt };
      let posts = await Post.findOneAndUpdate(filtro, atualizacao);
    } else {
      let posts = await Post.create({
        post: post,
        hrDt: hrDt,
        usuario
      });
    }

    posts = await Post.findOne({
      _id
    });

    res.json(posts);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let post = await Post.findByIdAndDelete({
      _id
    });

    return res.json(post);
  }
};
