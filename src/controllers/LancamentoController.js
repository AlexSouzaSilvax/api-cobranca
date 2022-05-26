//index (Lista), show (buscar), store (Criar), update (atualizar), destroy (apagar)

const Lancamento = require("../models/Lancamento");

module.exports = {
  //Listar
  async index(req, res) {
    const { _idUsuario } = req.body;
    //console.log("AQUI= " + _idUsuario);
    let lancamento = await Lancamento.find({ usuario: _idUsuario }).sort({"_id":-1});
    return res.json(lancamento);
  },
  //Buscar
  async show(req, res) {
    const { _id } = req.body;

    let lancamento = await Lancamento.findOne({
      _id,
    });

    return res.json(lancamento);
  },
  //Criar
  async store(req, res) {
    const {
      tipo,
      descricao,
      valor,
      mensal,
      pagamento,
      parcelas,
      dataPagamento,
      mesReferencia,
      dataVencimento,
      observacao,
      usuario,
    } = req.body;

    let lancamento = await Lancamento.create({
      tipo,
      descricao,
      valor,
      mensal,
      pagamento,
      parcelas,
      dataPagamento,
      mesReferencia,
      dataVencimento,
      observacao,
      usuario,
    });

    return res.json(lancamento);
  },
  //Atualizar
  async update(req, res) {
    const {
      _id,
      tipo,
      descricao,
      valor,
      mensal,
      pagamento,
      parcelas,
      dataPagamento,
      mesReferencia,
      dataVencimento,
      observacao,
      usuario,
    } = req.body;

    if (_id) {
      const filtro = { _id };
      const atualizacao = {
        tipo,
        descricao,
        valor,
        mensal,
        pagamento,
        parcelas,
        dataPagamento,
        mesReferencia,
        dataVencimento,
        observacao,
      };
      let lancamento = await Lancamento.findOneAndUpdate(filtro, atualizacao);
    } else {
      let lancamento = await Lancamento.create({
        tipo,
        descricao,
        valor,
        mensal,
        pagamento,
        parcelas,
        dataPagamento,
        mesReferencia,
        dataVencimento,
        observacao,
        usuario,
      });
    }

    lancamento = await Lancamento.findOne({
      _id,
    });

    res.json(lancamento);
  },
  //Apagar
  async destroy(req, res) {
    const { _id } = req.body;

    let lancamento = await Lancamento.findByIdAndDelete({
      _id,
    });

    return res.json(lancamento);
  },
};
