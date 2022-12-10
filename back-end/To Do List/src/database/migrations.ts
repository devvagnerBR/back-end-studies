import connection from "./connection";
import {
    TABLE_TO_DO_LIST_USER,
    TABLE_TO_DO_LIST_TASK,
    TABLE_TO_DO_RESPONSIBLE_USER_TASK_RELATION
} from "./tableNames";


const createTable = async () => {

    await connection.raw( `
        DROP TABLE IF EXISTS ${TABLE_TO_DO_LIST_USER},
                             ${TABLE_TO_DO_LIST_TASK},
                             ${TABLE_TO_DO_RESPONSIBLE_USER_TASK_RELATION};
                             
        CREATE TABLE IF NOT EXISTS ${TABLE_TO_DO_LIST_USER}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_TO_DO_LIST_TASK}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (creator_user_id) REFERENCES ${TABLE_TO_DO_LIST_USER}(id)
        );

        CREATE TABLE ${TABLE_TO_DO_RESPONSIBLE_USER_TASK_RELATION}(
            task_id VARCHAR(255),
            responsible_user_id VARCHAR(255),
            FOREIGN KEY (task_id) REFERENCES ${TABLE_TO_DO_LIST_TASK}(id),
            FOREIGN KEY (responsible_user_id) REFERENCES ${TABLE_TO_DO_LIST_USER}(id)
        );
    `).then( () => {

        console.log( `
            Tables
            ${TABLE_TO_DO_LIST_USER},
            ${TABLE_TO_DO_LIST_TASK},
            ${TABLE_TO_DO_RESPONSIBLE_USER_TASK_RELATION}
            created successfully!
        `);

    } ).catch( ( error: any ) => console.log( error.sqlMessage || error.message ) )

}

createTable()