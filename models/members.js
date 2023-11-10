'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Members.init({
    codeMembers: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmUseConditions: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
    activationToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};