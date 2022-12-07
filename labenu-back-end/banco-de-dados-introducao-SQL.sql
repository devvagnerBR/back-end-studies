USE estudos_labenu; 

CREATE TABLE  jogos_preferidos(
	id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    idade INT
); -- CRIANDO TABELA

SELECT * FROM jogos_preferidos; --  MOSTRANDO A TABELA 

DESCRIBE jogos_preferidos; -- DESCREVENDO TABLE

INSERT INTO jogos_preferidos(id,nome,email,idade)
VALUES(1,"State of Decay 2", "stateofdecay@gmail.com", 4),
	  (2, "League of Legends", "lolzin@gmail.com", 13 ); 

DELETE FROM jogos_preferidos
WHERE id = 2; -- DELETANDO ITENS ONDE ID = 2

SELECT nome,idade
FROM jogos_preferidos
WHERE idade = 4; -- MOSTRANDO SOMENTE JOGOS QUE TENHAM IDADE IGUAL A 4

INSERT INTO jogos_preferidos(id,nome,email,idade)
VALUES(2,"GTA V", "gta@gmail.com", 10),
	  (3, "Rocket League", "rocketleague@gmail.com", 6 ); -- INSERINDO DADOS
      
SELECT nome, idade
FROM jogos_preferidos
WHERE nome = "GTA V";  -- NOME QUE SEJA GTA V 

SELECT nome, idade
FROM jogos_preferidos
WHERE nome <> "GTA V"; --  DIFERENTE

SELECT nome, idade
FROM jogos_preferidos
WHERE idade IS NOT NULL; -- MOSTRA ITENS ONDE IDADE NÃO É NULO
      
SELECT nome, idade, email
FROM jogos_preferidos
WHERE nome LIKE "GT%"; -- MOSTRA ITENS QUE COMECEM COM GT

SELECT nome, idade
FROM jogos_preferidos
WHERE nome LIKE "%2"; -- MOSTRA ITENS QUE TERMINEM  COM 2

SELECT nome,idade
FROM jogos_preferidos
WHERE nome LIKE "%et%"  -- MOSTRA ITENS QUE TENHAM "et"
OR idade > 5; -- OU MOSTRA ITENS QUE TENHAM IDADE MAIOR QUE 5