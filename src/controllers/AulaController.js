const Aula = require("../models/Aula");

module.exports = {
  async index(req, res) {
    const { disciplina } = req.body;
    let aula = await Aula.find({ disciplina: disciplina }).sort({
      _id: -1,
    });
    return res.json(aula);
  },
  async store(req, res) {
    const { data, hora, concluida, disciplina } = req.body;

    let qtdAulas = await (await Aula.find()).length;    

    let a = await Aula.create({
      data,
      hora,
      numeroAula: (qtdAulas + 1),
      concluida,
      disciplina,
    });

    return res.json(a);
  },
  async update(req, res) {
    const { _id, data, hora, concluida, disciplina } = req.body;

    let a;

    if (_id) {
      const filtro = { _id };
      const atualizacao = {
        data,
        hora,
        concluida,
      };
      a = await Aula.findOneAndUpdate(filtro, atualizacao);
    } else {
      a = await Aula.create({
        data,
        hora,
        concluida,
        disciplina,
      });
    }

    a = await Aula.findOne({
      _id,
    });

    res.json(a);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let a = await Aula.findByIdAndDelete({
      _id,
    });

    return res.json(a);
  },
};
