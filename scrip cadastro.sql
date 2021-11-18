create database FPS;

use FPS;

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45),
nickName varchar(45),
email varchar(100),
senha varchar(100)
);


create table jogos (
idjogo int primary key auto_increment,
fkJogador int,
foreign key (fkjogador) references jogador (idjogador)
);
 
 create table jogador(
 idjogador int primary key auto_increment,
 nome varchar(45),
 jogo varchar(45)
 );

create table ranking(
fkjogos int,
foreign key (fkjogos) references usuario (idjogos),
fkusuario int,
foreign key (fkusuario) references usuario (idusuario)
);

