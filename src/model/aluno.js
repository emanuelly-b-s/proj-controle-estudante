const sala = require("./sala")
const Sequelize = require("sequelize");
const database = require("../config/db");
const aluno = database.define("Aluno", {
    IDAluno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    DataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    Sexo: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    Foto: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
});
module.exports = aluno;

aluno.belongsTo(sala, {
    constraint: true, //Garantir integridade referencial
    foreignKey: "IDSala",
});
