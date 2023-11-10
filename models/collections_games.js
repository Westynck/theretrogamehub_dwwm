'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collections_Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Collections_Games.init({
    codeCollections: DataTypes.INTEGER,
    codeGames: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Collections_Games',
  });
  return Collections_Games;
};