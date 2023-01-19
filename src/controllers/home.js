const sala = require('../model/sala');
const aluno = require('../model/aluno');
const { getAge } = require("../../public/js/getAge")

module.exports = {
    async pagInicialGet(req, res) {
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ["IDSala", "Nome"],
        });
        res.render('../views/index', { salas, alunos: [], id: '', salaSelecionada: ''});

    },
    async pagInicialPost(req, res) {
        const id = req.body.nome;
        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome', 'Capacidade'] });

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'DataNascimento', 'Foto'],
            where: { IDSala: id }
        });

        const salaSelecionada = await sala.findByPk(id, {raw: true, attributes: ['IDSala', 'Nome', 'Capacidade']});

        alunosIdade = alunos.map(a => {
            a.DataNascimento = getAge(a.DataNascimento)
            return a
        });


        res.render('../views/index', { salas, alunos, id, salaSelecionada, alunosIdade });


    }


}