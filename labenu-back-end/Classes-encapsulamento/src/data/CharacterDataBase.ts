//get all
import knex from 'knex'
import dotenv from 'dotenv'
import { Character } from './Character';

dotenv.config()

export class CharacterDataBase {

    private connection = knex( {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        },
    } )

    public async getAll() {

        try {
            return await this.connection( 'Characters' )
        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async createCharacter( character: Character ) {

        try {
            await this.connection( 'Characters' ).insert( character )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }
}




//create





//connection