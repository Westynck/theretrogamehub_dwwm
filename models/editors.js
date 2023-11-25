"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Editors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //!! Methode pour créer un éditeur
    static async addEditorToDatabase(editorData) {
      try {
        const editor = await Editors.create({
          ...editorData,
        });
        return editor;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un éditeur
    static async getEditorToDatabase(editorData) {
      try {
        const editor = await Editors.findOne({
          where: {
            name: editorData.name,
          },
        });
        return editor;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer un éditeur par son id
    static async getEditorByIdToDatabase(id) {
      try {
        const editor = await Editors.findByPk(id);
        return editor;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les éditeurs
    static async getAllEditors() {
      try {
        const editors = await Editors.findAll();
        return editors;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les éditeurs d'un jeu
    static async getAllGamesFromEditorToDatabase(editorData) {
      try {
        const editor = await Editors.findOne({
          where: {
            id: editorData.id,
          },
          include: "games",
        });
        return editor;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour mettre à jour un éditeur
    static async updateEditorToDatabase(id, editorData) {
      try {
        const editor = await Editors.update(
          {
            ...editorData,
          },
          {
            where: {
              id,
            },
          }
        );
        return editor;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un éditeur
    static async deleteEditor(id) {
      try {
        const editor = await Editors.destroy({
          where: {
            id,
          },
        });
        return editor;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
      // un éditeur appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Editors.belongsToMany(models.Games, {
        through: "GamesEditors",
        foreignKey: "editors_id",
        otherKey: "games_id",
        as: "games",
      });
    }
  }
  Editors.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Editors",
    }
  );
  return Editors;
};
