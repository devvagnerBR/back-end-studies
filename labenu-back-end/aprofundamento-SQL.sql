USE professores_labenu;

-- CREATE TABLE 

CREATE TABLE professores_labenu(
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL, 
    email VARCHAR(255) UNIQUE, 
    idade INT
);

SELECT * FROM professores_labenu;

DESCRIBE professores_labenu;

-- ALTER 

ALTER TABLE professores_labenu
ADD COLUMN data_nascimento VARCHAR(255) NOT NULL; -- ADD NOVA COLUNA NA TABELA

ALTER TABLE professores_labenu
DROP COLUMN idade; -- REMOVER COLUNA DE IDADE

ALTER TABLE professores_labenu
CHANGE data_nascimento data_nasc Date NOT NULL; -- TROCANDO NOME DA COLUNA E TIPO

ALTER TABLE professores_labenu
CHANGE  data_nasc data_nascimento VARCHAR(255) NOT NULL; -- TROCANDO NOME DA COLUNA E TIPO


-- INSERT 

INSERT INTO professores_labenu(id,nome,email,data_nascimento)
VALUES (1, "Flávio", "flavio@lab.com", "2002-01-01"),
       (2, "Iza", "iza@lab.com", "2002-01-01"),
       (3, "Yuzo", "yuzo@lab.com",  "2089-06-13"),
       (4, "Udimile", "udimile@lab.com",  "2000-01-01"); -- INSERINDO USUARIOS NA FAVELA

-- UPDATE

UPDATE professores_labenu
SET data_nascimento = "2000-01-01"
WHERE nome = "Udimile";


-- CONSTRAINTS DO SQL - Ex: UNIQUE | PK | NOT NULL

-- VALOR DEFAULT

ALTER TABLE professores_labenu
ADD COLUMN especialidade ENUM("front", "back") DEFAULT "back"; -- ADD COLUNA

ALTER TABLE professores_labenu
CHANGE especialidade especialidade ENUM("front", "back") NOT NULL DEFAULT "back"; -- ALTERANDO COLUNA


UPDATE professores_labenu
SET especialidade = "front"
WHERE id = 4; -- ALTERANDO INFOS DE USUARIO