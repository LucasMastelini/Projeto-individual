var database = require("../database/config")

var contador = 0

console.log(contador);

function votarjogo(idjogo, idusuario ) {

    contador++;

    var instrucao = `
    update usuario set fkjogos = ${idjogo}, voto = ${1} where idusuario = ${idusuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listarVotos() {

    var instrucao = `
    select jogos.nome, count(voto) as Votos 
    from usuario inner join jogos on fkjogos=idjogo group by jogos.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    votarjogo,
    listarVotos
}