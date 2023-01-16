
// Iniciando Route do Express
const express = require('express');
const route = express.Router();

const config = require('./src/config/multer');
const multer = require("multer"); 

const home = require('./src/controllers/home');
const cadastro = require("./src/controllers/cadastro");
const editar = require('./src/controllers/editar');

// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/insertAluno', multer(config).single('foto'), cadastro.alunoInsert);

// Importando os Controllers

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);


route.get('/cadastrar_sala', cadastro.cadSala);
route.post('/insertSala', cadastro.salaInsert);


route.post('/insertAluno', cadastro.alunoInsert);
route.get('/cadastrar_aluno', multer(config).single('foto'), cadastro.alunoInsert);

route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionar);

module.exports = route;