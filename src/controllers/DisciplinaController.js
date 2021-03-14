const Disciplina = require("../models/Disciplina");

module.exports = {
  async index(req, res) {
    const { usuario } = req.body;
    let disciplina = await Disciplina.find({ usuario: usuario }).sort({
      _id: -1,
    });
    return res.json(disciplina);
  },
  async store(req, res) {
    const {
      disciplina,
      descricao,
      qtdHoras,
      qtdAulas,
      qtdAulasRealizadas,
      qtdAulasRestantes,
      usuario,
    } = req.body;

    let dis = await Disciplina.create({
      disciplina,
      descricao,
      qtdHoras,
      qtdAulas,
      qtdAulasRealizadas,
      qtdAulasRestantes,
      usuario,
    });

    return res.json(dis);
  },
  async update(req, res) {
    const {
      _id,
      disciplina,
      descricao,
      qtdHoras,
      qtdAulas,
      qtdAulasRealizadas,
      qtdAulasRestantes,
      usuario,
    } = req.body;

    let dis;

    if (_id) {
      const filtro = { _id };
      const atualizacao = {
        disciplina,
        descricao,
        qtdHoras,
        qtdAulas,
        qtdAulasRealizadas,
        qtdAulasRestantes,
      };
      dis = await Disciplina.findOneAndUpdate(filtro, atualizacao);
    } else {
      dis = await Disciplina.create({
        disciplina,
        descricao,
        qtdHoras,
        qtdAulas,
        qtdAulasRealizadas,
        qtdAulasRestantes,
        usuario,
      });
    }

    dis = await Disciplina.findOne({
      _id,
    });

    res.json(dis);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let dis = await Disciplina.findByIdAndDelete({
      _id,
    });

    return res.json(dis);
  },
};
