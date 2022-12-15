 ## ARQUITETURA DE SOFTWARE | FLÁVIO 

A arquitetura impacta o software em [4-pontos-principais]

 - Desenvolvimento
 - Deploy
 - Operação
 - Manutenção

# arquitetura MVC | mais usado

   requisição-------Resposta
        Controller - aprensentação | recebe as requisições e mandam as requisições;
        Bussiness -  regras de negocios;
        Data -  comunica com o banco de dados | envia | recebe requisições de banco de dados ;

----- Camadas Principais -----
## Controller 
- interage com sistemas externos  Ex: Postman,outras apis, app de pc,mobile.etc...;
- faz a comunicação inicial entre as camadas e conversa diretamente com a Business;
- recebe as requisições e devolve as respostas;

## Business
- recebe a ação a ser executada da Controller;
- Parte principal da aplicação, pois guarda as lógicas e as regras de negócio;
- É aqui que fica centralizada a maior parte das dependências;

## Data
- Contém as definições de conexão com o banco de dados;
- Guarda a lógica de queries da aplicação;
- Estrutura osd ados da comunicação;

----- Camadas Extras -----

# Services
- Guarda códigos externos que nos ajudam a aplicar ou verificar regras de negócio;
- Separa as responsabilidades da camada Business, deixando a mais limpa e facilitando a manutenção do código;

# RESUMO DA AULA

[CONTROLLER]
        -recebe requisições e envia respostas no nosso caso, a implementação dos endpoints do [express] fica aqui;
[BUSINESS]
        -cuida das regras de negócio, validações e dependências;
[DATA]
        -Responsável pela implementação do banco de dados;
        -Implementação do Knex fica aqui