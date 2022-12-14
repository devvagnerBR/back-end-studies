import connection from "./connection";
import { TABLE_USERS, TABLE_TASKS } from "./tableNames";


const createTable = async () => {

    await connection.raw( `
    
        DROP TABLE IF EXISTS ${TABLE_USERS},
                             ${TABLE_TASKS};
                             
        CREATE TABLE ${TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE ${TABLE_TASKS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            description VARCHAR(255)  NOT NULL,
            created_at DATE NOT NULL,
            status VARCHAR(255) NOT NULL DEFAULT "false",
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${TABLE_USERS}(id)
        );


        
    `).then( () => {

        console.log( `
            Tables
            ${TABLE_USERS},
            ${TABLE_TASKS}
            created successfully!
        `);

    } ).catch( ( error: any ) => console.log( error.sqlMessage || error.message ) )

}

createTable()