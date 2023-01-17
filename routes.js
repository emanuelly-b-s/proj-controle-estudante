// Iniciando Route do Express
const express = require('express');
const route = express.Router();


// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const editar = require('./src/controllers/editar');


// Iniciando Multer
const multer = require("multer");


// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');


// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/insert_aluno', multer(config).single('foto'), cadastro.alunoInsert); 


// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/cadastrar_aluno', cadastro.aluno);
route.get('/cadastrar_sala', cadastro.sala);


route.post('/insertSala', cadastro.salaInsert);
route.post('/insertAluno',  multer(config).single('foto'), cadastro.alunoInsert);

route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionar);



module.exports = route;