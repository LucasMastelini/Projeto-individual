create database FPS;

use FPS;

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45),
nickName varchar(45),
email varchar(100),
senha varchar(100),
fkjogos int,
foreign key (fkjogos) references jogos (idjogo)
);

select*from usuario;


create table jogos (
idjogo int primary key auto_increment,
nome varchar(45),
voto int
);
 




