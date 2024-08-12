'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Onibus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Onibus.init({
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    motorista: DataTypes.STRING,
    localizacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Onibus',
  });
  return Onibus;
};