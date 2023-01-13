const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async pagInicialGet(req, res) {
        res.render('../views/index');
    },
    async cadAluno(req, res) {
        res.render('../views/cadastrar_aluno', {
            salas: await sala.findAll()
        })
    },
    async cadSala(req, res) {
        res.render('../views/cadastrar_sala')
    },
    async editAluno(req, res) {
        res.render('../views/editar_card_aluno')
    },
}