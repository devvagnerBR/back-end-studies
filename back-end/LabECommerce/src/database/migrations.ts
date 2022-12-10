import connection from "./connection";
import { LABECOMMERCE_USERS, LABECOMMERCE_PRODUCTS, LABECOMMERCE_PURCHASES } from './tableNames'


const createTable = async () => {
    await connection.raw( `
        DROP TABLE IF EXISTS ${LABECOMMERCE_USERS},
                             ${LABECOMMERCE_PRODUCTS},
                             ${LABECOMMERCE_PURCHASES};   

        CREATE TABLE IF NOT EXISTS ${LABECOMMERCE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${LABECOMMERCE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${LABECOMMERCE_PURCHASES}(
            id VARCHAR(255) PRIMARY KEY,
            quantity INT NOT NULL,
            total_price INT NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${LABECOMMERCE_USERS}(id),
            FOREIGN KEY (product_id) REFERENCES ${LABECOMMERCE_PRODUCTS}(id)
        );
    ` ).then( () => {

        console.log( `Tables ${LABECOMMERCE_USERS}, ${LABECOMMERCE_PRODUCTS}, ${LABECOMMERCE_PURCHASES} created successfully` );

    } ).catch( ( error: any ) => console.log( error.sqlMessage || error.message ) )
}

createTable()