CREATE TABLE Clientes(

    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    cpf INT(11) UNIQUE NOT NULL  

);

DROP TABLE Clientes; 

SELECT * FROM Clientes;

INSERT INTO Clientes(id,name,cpf)
VALUES("client3","Helany",444);


      -- inicia da tablea Contas para relacionar com a taebla de Clientes - 1:1

CREATE TABLE Contas (

    id VARCHAR(100) PRIMARY KEY,
    email VARCHAR(40) UNIQUE NOT NULL,
    password VARCHAR(30)  NOT NULL,  
    id_cliente VARCHAR(100) UNIQUE NOT NULL,   -- PRECISA SER IGUAL AO ID DA TABLE Clientes
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id)  
);



SELECT * FROM Contas;
SELECT * FROM Clientes;

INSERT INTO Contas (id,email,password, id_cliente)
VALUES ("conta1","alice@gmail.com","444","client1"),
        ("conta2","bob@gmail.com","555","client2");

SELECT * FROM Contas
JOIN Clientes ON Contas.id_cliente = Clientes.id;


-- tabela de fornecedores usando a relação 1:n


CREATE TABLE Fornecedores(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    cnpj VARCHAR(30) UNIQUE NOT NULL 
);



INSERT INTO Fornecedores(id,name,cnpj)
VALUES("fornecedor1","Coragem","4599"),
("fornecedor2","Dory","4600");

SELECT * FROM Fornecedores;

--  CRIANDO A TABELA DE PRODUTOS

CREATE TABLE Produtos(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    price DECIMAL(8,2) NOT NULL ,
    id_fornecedor VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedores(id)
);

SELECT * FROM produtos;

INSERT INTO produtos(id,name,price,id_fornecedor)
VALUES("produto1","Cenoura",8,"fornecedor1"),
      ("produto2", "Abacate",15, "fornecedor1"),
      ("produto3","Cebola",27,"fornecedor1"),
      ("produto4","Camarão",65,"fornecedor2"),
      ("produto5","Lula",105,"fornecedor2");


SELECT 
p.name,
p.price,
f.name, 
f.cnpj   
FROM Produtos as p
JOIN Fornecedores as f ON p.id_fornecedor = f.id ;


-- RELAÇÃO CLIENTES E PRODUTOS N : M

CREATE TABLE Compras(

    id VARCHAR(100) PRIMARY KEY,
    id_client VARCHAR(100) NOT NULL,
    id_produto VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (id_client) REFERENCES Clientes(id),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id)

);



INSERT INTO Compras(id,id_client, id_produto, quantity)
VALUES("compra1", "client1", "produto3", 5),
      ("compra2","client1","produto5", 12), 
      ("compra3","client2","produto1", 8), 
      ("compra4","client2","produto2", 12), 
      ("compra5","client2","produto3", 25), 
      ("compra6","client2","produto4", 2), 
      ("compra7","client2","produto5", 9); 
      
SELECT * FROM Compras
JOIN Clientes as c ON Compras.id_client = c.id
JOIN Produtos as p ON Compras.id_produto = p.id;


SELECT c.name, c.cpf , p.name, p.price, Compras.quantity FROM Compras
JOIN Clientes as c ON Compras.id_client = c.id
JOIN Produtos as p ON Compras.id_produto = p.id;