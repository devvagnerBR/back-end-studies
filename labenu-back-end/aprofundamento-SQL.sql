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

--  AUTO_INCREMENT

ALTER TABLE professores_labenu
CHANGE id id INT  AUTO_INCREMENT;

INSERT INTO professores_labenu(nome,email, data_nascimento)
VALUES("Roberto Maia", "rmaia@lab.com", "1994-01-01")

-- FUNÇÕES SQL 

-- LOWER 

SELECT LOWER(nome)
FROM professores_labenu; -- RETORNA TODOS OS NOMES LETRA MINÚSCULA

-- UPPER 

SELECT UPPER(nome)
FROM professores_labenu; -- RETORNA TODOS OS NOMES COM LETRAS MAIÚSCULAS

-- SUM

SELECT SUM(id)
FROM professores_labenu; -- SOMA TODOS OS ID'S

-- AVG

SELECT AVG(id)
FROM professores_labenu; -- CALCULA A MÉDIA

-- COUNT

SELECT COUNT(*)
FROM professores_labenu
WHERE especialidade = "front"; -- CONTA QUANTOS USUARIOS SÃO ESPECIALISTAS EM FRONT

-- SELECT

SELECT *
FROM professores_labenu
WHERE especialidade = "front"; -- MOSTRA QUAIS USUÁRIOS SÃO ESPECIALISTAS EM FRONT

-- MIN 

SELECT MIN(id)
FROM professores_labenu;

-- MAX 

SELECT MAX(id)
FROM professores_labenu;

-- MAX²

SELECT MAX(data_nascimento)
FROM professores_labenu;

-- Padrão Americano (ISO) de Data = aaaa-mm-dd

-- CURRENTDATE

SELECT CURDATE() FROM DUAL; -- PEGA A DATA ATUAL EM FORMATO ISO AAAA-MM-DD

-- DATEDIFF

SELECT DATEDIFF(CURDATE(), "1994-12-21") / 365
FROM DUAL; -- RETORNA A DIFERENÇA ENTRE DATAS EM ANOS

-- CONCAT

SELECT CONCAT(
    "A pessoa instrutora ", nome,
    " é especialista em ", especialidade, "-end;"
) FROM professores_labenu; -- CONCATENA INFORMAÇÕES

-- ALIAS 

SELECT CONCAT(
    "A pessoa instrutora ", nome,
    " é especialista em ", especialidade, "-end;"
) AS frase FROM professores_labenu; -- ALTERA O NOME DA COLUNA 


-- GROUP BY

SELECT COUNT(*), especialidade
FROM professores_labenu
GROUP BY especialidade; -- RETORNA A QUANTIDADE DE CADA ESPECIALIDADE E AGRUPA


-- ORDER BY ASC

SELECT * FROM professores_labenu
ORDER BY nome ASC; -- ORDENA EM ORDEM CRESCENTE 

-- ORDER BY DESC

SELECT * FROM professores_labenu
ORDER BY nome DESC; -- ORDENA EM ORDEM DECRESCENTE 


-- LIMIT

SELECT * FROM professores_labenu
ORDER BY nome ASC
LIMIT 3; -- RETORNA OS 3 PRIMEIROS USUARIOS ORDENADO CRESCENTEMENTE



