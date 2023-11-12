"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      // une collection appartient au moins à un membre et au maximum à un membre (belongsTo) 1:1
      models.Collections.belongsTo(models.Members, {
        foreignKey: {
          allowNull: false,
        },
      });
      //une Collection appartient au minimum à aucune plateforme et au maximum à plusieurs plateformes (belongsToMany) 0:n
      models.Collections.belongsToMany(models.Platforms, {
        through: "GamesPlatforms",
        foreignKey: "codeCollections",
        otherKey: "codePlatforms",
        as: "platforms",
      });
      //une Collection appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Collections.belongsToMany(models.Games, {
        through: "GamesPlatforms",
        foreignKey: "codeCollections",
        otherKey: "codeGames",
        as: "games",
      });
    }
  }
  Collections.init(
    {
      codeCollections: DataTypes.INTEGER,
      name: DataTypes.STRING,
      codeMembers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Collections",
    }
  );
  return Collections;
};
