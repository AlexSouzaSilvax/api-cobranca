const FeedBack = require("../models/FeedBack");

module.exports = {
  async index(req, res) {
    let f = await FeedBack.find();
    return res.json(f);
  },
  //Criar
  async store(req, res) {
    const { email, feedback, dataCompleta } = req.body;

    let f = await FeedBack.create({
      email,
      feedback,
      dataCompleta
    });

    return res.json(f);
  }
};
