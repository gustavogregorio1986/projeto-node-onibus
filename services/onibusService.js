const Onibus = require('../models/onibus');

async function createOnibus(data) {
    return await Onibus.create(data);
  }
  
  async function listarOnibus() {
    return await Onibus.findAll();
  }
  
  module.exports = {
    createOnibus,
    listarOnibus
  }