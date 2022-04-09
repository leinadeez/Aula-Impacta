const {UsuarioModel} = require('./model');

exports.login = async (req, res) => {
    try {
        const {login, senha} = req?.body;
        if (!login || !senha) {
            res.status(400);
            res.send({error: "Usuário ou senha não informados"});
            return
        }

        const foundData = await UsuarioModel.find({
            email : login,
            senha : senha
        })
        
        if(foundData && foundData.length > 0) {
            const first = foundData[0];
            res.status(200);
            res.send({msg: `Usuário ${first.nome} autenticado com sucesso`})
        } else {
            res.status(400);
            res.send({msg: `Usuário não encontrado`})
        }

    } catch(e) {
        console.log(`Erro ao autenticar: ${e}`);
        res.status(500);
        res.sent({error: "Deu ruim ao autenticar"});
    }
}

exports.cadastro = async (req, res) => {
    try {
        const {nome, email, senha} = req?.body;

        if (!nome || nome.length <2) {
            res.status(400);
            res.send({error: "Nome Invalido"});
            return
        }

        if (!email || email.length < 6 || !email.includes('.') || !email.includes('@')) {
            res.status(400);
            res.send({error: "E-mail invalido"});
            return
        }

        if (!senha || nome.length <4) {
            res.status(400);
            res.send({error: "Senha Inválida"});
            return
        }

        const foundData = await UsuarioModel.find({
            email : email
        })
        
        if(foundData && foundData.length > 0) {
            res.status(400);
            res.send({msg: `E-mail já utilizado`})
        }

        const usuario = {
            nome,
            email,
            senha
        };

        await UsuarioModel.create(usuario);
        res.status(200);
        res.send({error: 'Usuario cadastrado com sucesso'})

    } catch(e) {
        console.log(`Erro ao autenticar: ${e}`);
        res.status(500);
        res.sent({error: "Deu ruim ao autenticar"});
    }
}