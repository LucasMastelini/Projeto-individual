var database = require("../database/config");

function buscarVotos() {
    instrucaoSql = `select jogos.nome, count(voto) as Votos 
    from usuario right join jogos on fkjogos=idjogo group by jogos.nome;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {
//     instrucaoSql = `select 
//                         temperatura, 
//                         umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


module.exports = {
    buscarVotos,
}