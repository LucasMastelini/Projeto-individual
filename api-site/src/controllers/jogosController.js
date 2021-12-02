// var usuarioModel = require("../models/usuarioModel");

var jogosModel = require("../models/jogosModel");

function votar(req, res) {
    var idjogo = req.body.idjogo;
    var idusuario = req.params.idusuario;
    console.log(idjogo, idusuario)

    if (idjogo == undefined) {
        res.status(400).send('cago tudo');
    }
    

    jogosModel.votarjogo(idjogo, idusuario).then(function (res){
        res.status(200).send('foi');
    }).catch(function(erro) {
        console.log(erro);
        res.status(500).send("cago tudo (erro de servidor)", erro);
    })

    res.send('tudo certo')
}

function listar(req, res) {

    jogosModel.listarVotos().then(function (resultado){
        res.status(200).json(resultado);
    }).catch(function(erro) {
        console.log(erro);
        res.status(500).send("cago tudo (erro de servidor)", erro);
    });
}

module.exports = {
    votar,
    listar
}