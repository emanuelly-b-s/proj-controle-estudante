const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('jsproject', 'ProjControleAlunos', '123456proj110123',
    {
        dialect: 'mssql', host: 'localhost', port: 49775
    });
database.sync();
module.exports = database;
