create database FPS;

use FPS;

create table cadastro(
idcadastro int ,
primary key (nickName, Email),
nome varchar(45),
sobrenome varchar(45),
nickName varchar(45),
email varchar(100),
senha varchar(20),
confirmarSenha varchar(20));


create table login(
idlogin int primary key auto_increment,
nickName varchar(45),
email varchar(100),
senha varchar(20));
