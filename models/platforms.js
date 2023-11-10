'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Platforms.init({
    codePlatforms: DataTypes.INTEGER,
    title: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    releaseDate: DataTypes.DATE,
    state: DataTypes.STRING,
    manufacturer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Platforms',
  });
  return Platforms;
};