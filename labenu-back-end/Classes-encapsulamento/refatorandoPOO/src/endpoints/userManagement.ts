import { knex } from 'knex';
import { User } from '../models/User';
import { REFATORANDO_POO } from '../database/tables';
import dotenv from 'dotenv'

dotenv.config()


export class USER_MANAGEMENT {

    //  connection
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

    //  get all users
    public async getAllUser() {

        try {
            return await this.connection( REFATORANDO_POO )
        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }


    //  create user
    public async createUser( user: User ) {

        try {
            return await this.connection( REFATORANDO_POO ).insert( user )
        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }


    // get user by id

    public async getUserById( id: string ) {
        try {

            return await this.connection( REFATORANDO_POO )
                .select()
                .where( "id", "=", `${id}` )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }


    //edit user
    public async editUser( userUpdated: { name: string, age: string, job: string }, id: string ) {

        try {
            return await this.connection( REFATORANDO_POO )
                .update( userUpdated )
                .where( { id: id } )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }

    }


    //delete user

    public async deleteUser( id: string ) {
        try {
            return await this.connection( REFATORANDO_POO )
                .where( { id: id } )
                .del()
        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }
}
