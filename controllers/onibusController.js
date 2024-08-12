const onibusService = require('../services/onibusService');

async function createOnibus(req, res) {
    try {
      const onibus = await onibusService.createProduto(req.body);
      res.status(201).json(onibus);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  async function listarOnibus(req, res) {
    try {
      const onibus = await onibusService.listarProdutos();
      res.status(200).json(onibus);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
module.exports = {
    createOnibus,
    listarOnibus
}