'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collections_Platforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Collections_Platforms.init({
    codeCollections: DataTypes.INTEGER,
    codePlatforms: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Collections_Platforms',
  });
  return Collections_Platforms;
};