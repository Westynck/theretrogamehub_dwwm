"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //!! Methode pour créer un membre
    static async register(memberData) {
      const hashedPassword = await bcrypt.hash(memberData.password, 10);

      try {
        const member = await Member.create({
          ...memberData,
          password: hashedPassword,
          confirmUseConditions: true,
          activationToken: crypto.randomBytes(20).toString("hex"),
        });

        if (member) {
          const confimationLink = `${process.env.BASE_URL}/confirm/${member.activationToken}`;

          const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
              user: "lucius.koelpin@ethereal.email",
              pass: "DRywZJ2V29wYqzay9f",
            },
          });
          const mailOptions = {
            from: process.env.EMAIL,
            to: member.email,
            subject: "confirm your email",
            text: `Please confirm your email by clicking on the link:  ${confimationLink}`,
          };
          await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
                reject(error);
              } else {
                console.log(`Email sent: ${info.response}`);
                resolve();
              }
            });
          });
        }
        return member;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
    //!! Methode pour confirmer un membre
    static async confirmAccount(activationToken) {
      const member = await Member.findOne({
        where: { activationToken },
      });

      if (member) {
        member.activationToken = null;
        member.isActive = true;
        await member.save();
      }

      return member;
    }
    //!! Methode pour connecter un membre
    static async login(email, password) {
      const member = await Member.findOne({
        where: { email },
      });

      if (member) {
        const isPasswordValid = await bcrypt.compare(password, member.password);

        if (isPasswordValid) {
          return member;
        }
      }
      return false;
    }

    //!! Methode pour récupérer les informations d'un membre
    static async getMemberDetails(id) {
      const member = await Member.findByPk(id, {
        attributes: {
          exclude: [
            "password",
            "activationToken",
            "updatedAt",
            "createdAt",
            "isActive",
            "confirmUseConditions",
          ],
        },
      });
      if (!member) {
        throw new Error("Member not found");
      }
      return member;
    }

    static async updateProfile(id, memberData) {
      const member = await Member.findByPk(id);
      if (!member) {
        throw new Error("Member not found");
      }

      if (memberData && memberData.password) {
        const hashedPassword = await bcrypt.hash(memberData.password, 10);
        memberData.password = hashedPassword;
      }

      try {
        await member.update(memberData);

        return member;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour récupérer tous les membres
    static async getAllMembers() {
      const members = await Member.findAll({
        attributes: {
          exclude: [
            "password",
            "activationToken",
            "updatedAt",
            "createdAt",
            "isActive",
            "confirmUseConditions",
          ],
        },
      });
      return members;
    }

    //!! Methode pour récupérer un membre par son id
    static async getMemberById(id) {
      const member = await Member.findByPk(id, {
        attributes: {
          exclude: [
            "password",
            "activationToken",
            "updatedAt",
            "createdAt",
            "isActive",
            "confirmUseConditions",
          ],
        },
      });
      if (!member) {
        throw new Error("Member not found");
      }
      return member;
    }

    //!! Methode pour récupérer un membre par son email
    static async getMemberByNickname(nickname) {
      const member = await Member.findOne({
        where: { nickname },
        attributes: {
          exclude: [
            "password",
            "activationToken",
            "updatedAt",
            "createdAt",
            "isActive",
            "confirmUseConditions",
          ],
        },
      });
      if (!member) {
        throw new Error("Member not found");
      }
      return member;
    }

    //!! Methode pour bloquer un membre
    static async blockMember(id) {
      const member = await Member.findByPk(id);
      if (!member) {
        throw new Error("Member not found");
      }

      try {
        await member.update({ isActive: false });

        return member;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour débloquer un membre
    static async unblockMember(id) {
      const member = await Member.findByPk(id);
      if (!member) {
        throw new Error("Member not found");
      }

      try {
        await member.update({ isActive: true });

        return member;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    //!! Methode pour supprimer un membre
    static async deleteMember(id) {
      const member = await Member.findByPk(id);
      if (!member) {
        throw new Error("Member not found");
      }

      try {
        await member.destroy();

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    static associate(models) {
      // define association here
      // un membre a au moins une collection et au maximum plusieurs collections (hasMany) 1:n
      models.Members.hasMany(models.Collections, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Members.init(
    {
      nickname: DataTypes.STRING,
      mail: DataTypes.STRING,
      password: DataTypes.STRING,
      confirmUseConditions: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
      activationToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Members",
    }
  );
  return Members;
};
