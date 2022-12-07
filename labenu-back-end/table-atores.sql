CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,    
    gender VARCHAR(6) NOT NULL
);

SELECT * FROM actor;

INSERT INTO actor(id,name,salary,birth_date, gender)
VALUES("001", "Tom Holland", 350000, "1997-12-21", "male");