import connection from "./connection";
import { TABLE_USERS, TABLE_TASKS } from "./tableNames";


const createTable = async () => {

    await connection.raw( `
    
        DROP TABLE IF EXISTS ${TABLE_USERS},
                             ${TABLE_TASKS};
                             
        CREATE TABLE ${TABLE_USERS}(
            user_id VARCHAR(255) PRIMARY KEY,
            user_name VARCHAR(255) NULL,
            user_nickname VARCHAR(255) UNIQUE NOT NULL,
            user_email VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE ${TABLE_TASKS}(
            task_id VARCHAR(255) PRIMARY KEY,
            task_name VARCHAR(255) NOT NULL UNIQUE,
            task_description TEXT NOT NULL,
            task_created_at DATE NOT NULL,
            task_status VARCHAR(255) NOT NULL DEFAULT "false",
            task_user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (task_user_id) REFERENCES ${TABLE_USERS}(user_id)
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