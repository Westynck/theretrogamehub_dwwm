const { Members } = require("../models");
const bcrypt = require("bcrypt");

describe("Members model", () => {
  beforeAll(async () => {
    await Members.destroy({
      where: {},
    });

    await Members.sequelize.query(
      "ALTER SEQUENCE public.members_id_seq RESTART WITH 1;"
    );
  });

  it("Création d'un membre", async () => {
    const memberData = {
      nickname: "test",
      email: "test@test.com",
      password: "test",
      confirmPassword: "test",
      confirmUseConditions: true,
      isActive: false,
    };

    const member = await Members.register(memberData);

    expect(member).toBeTruthy();
    expect(member.id).toBeTruthy();
    expect(member.nickname).toBe(memberData.nickname);
    expect(member.email).toBe(memberData.email);
    expect(member.password).toBeTruthy();
    expect(member.confirmUseConditions).toBe(memberData.confirmUseConditions);
    expect(member.isActive).toBe(false);
    expect(member.activationToken).toBeTruthy();
    expect(member.createdAt).toBeTruthy();
    expect(member.updatedAt).toBeTruthy();

    expect(member).toBeTruthy();

    const isPasswordValid = await bcrypt.compare(
      memberData.password,
      member.password
    );

    expect(isPasswordValid).toBeTruthy();
  });

  it("Récupération d'un membre par son nickname", async () => {
    const member = await Members.getMemberByNickname("test");

    expect(member).toBeTruthy();
    expect(member.nickname).toBe("test");
  });
});
