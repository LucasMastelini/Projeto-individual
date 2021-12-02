create database FPS;

use FPS;


create table jogos (
idjogo int primary key auto_increment,
nome varchar(45)
);

select*from usuario;

insert into jogos values
(null, 'RainbowSix',1);

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45),
nickName varchar(45),
email varchar(100),
senha varchar(100),
fkjogos int,
foreign key (fkjogos) references jogos (idjogo),
voto int
);

insert into jogos values 
(1,'RainbowSix'),
(2,'CS:GO'),
(3,'Valorant'),
(4,'OverWatch'),
(5,'Warzone'),
(6,'Fortnite'),
(7,'Warface'),
(8,'Battlefield');

select*from usuario;



alter table usuario rename column idusuario to idlog;

update usuario set fkjogos = 5, voto = 1 where idusuario = 20 ;
update usuario set fkjogos = 2, voto = 10 where idusuario = 2 ;
update usuario set fkjogos = 3, voto = 4 where idusuario = 3 ;
update usuario set fkjogos = 4, voto = 9 where idusuario = 4 ;
update usuario set fkjogos = 5, voto = 12 where idusuario = 5 ;
update usuario set fkjogos = 6, voto = 3 where idusuario = 6 ;
update usuario set fkjogos = 7, voto = 5 where idusuario = 7 ;
update usuario set fkjogos = 8, voto = 8 where idusuario = 8 ;


select * from jogos;
select jogos.nome, count(voto) as Votos 
    from usuario inner join jogos on fkjogos=idjogo group by jogos.nome;
    
    insert into usuario (voto) values 
    (15),
    (10),
    (4),
    (9),
    (12),
    (2),
    (7),
    (6);