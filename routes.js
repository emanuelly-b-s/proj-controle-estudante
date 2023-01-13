const cadastro = require("./src/controllers/cadastro")
// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
// Iniciando as rotas
route.get('/', home.pagInicialGet);

route.get('/cadastrar_aluno', home.cadAluno);
route.get('/cadastrar_sala', home.cadSala);

route.get('/editar_card_aluno', home.editAluno);

route.post('/insertSala', cadastro.salaInsert);
route.post('/insertAluno', cadastro.alunoInsert);

module.exports = route;