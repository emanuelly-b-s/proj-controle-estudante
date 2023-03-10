// Importando as tabelas do DB
const sala = require("../model/sala");
const aluno = require("../model/aluno");
module.exports = {
    async sala(req, res) {
        res.render("../views/cadastrar_sala");
    },
    async salaInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        console.log(dados);
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade,
            IdadeMin: dados.idadeMin,
            IdadeMax: dados.idadeMax
        });
        // Redirecionar para a página principal
        res.redirect("/");
    },
    async aluno(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ["IDSala", "Nome", "Capacidade"],
        });

        var shouldDisable = []
        for(var s of salas) {
            const qtdAlunos = await aluno.count({
                where: { IDSala: s.IDSala}
            })

            if(qtdAlunos >= s.Capacidade) {
                shouldDisable.push('disabled')
            } else {
                shouldDisable.push('')
            }
        }

        // Renderizando e passando o nome das salas para o front
        res.render("../views/cadastrar_aluno", { salas, shouldDisable });
    },
    async alunoInsert(req, res) {
        // Recebendo as informações pelo Body
        const dados = req.body;
        console.log(dados);
        // Nome padrão da foto
        let foto = 'usuario.png';
        // Nome padrão da foto
        // Verificando se foi enviada alguma foto
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }

        // Criando aluno no banco de dados
        await aluno.create({
            Nome: dados.nome,
            DataNascimento: dados.dataNascimento,
            Sexo: dados.sexo,
            IDSala: dados.sala,
            Foto: foto
        });

        // Redirecionar para a página principal
        res.redirect('/');
    },
    async editAluno(req, res) {
        const dados = req.body;
        // Nome padrão da foto
        let foto = 'usuario.png';
        // Criando aluno no banco de dados
        await aluno.alter({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala,
            Foto: foto
        });
        res.render('/');
    },
    async cadAluno(req, res) {
        res.render('../views/cadastrar_aluno', {
            salas: await sala.findAll()
        })
    },
    async cadSala(req, res) {
        res.render('../views/cadastrar_sala')
    }
};
