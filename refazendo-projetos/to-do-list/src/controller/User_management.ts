import { knex } from 'knex';
import dotenv from 'dotenv';
import connection from '../database/connection';
import { TABLE_USERS } from '../database/tableNames';
import { USER } from './../models/User';



dotenv.config()

export class USER_MANAGEMENT {

    public async createUser( user: USER ) {

        try {
            return await connection( TABLE_USERS ).insert( user )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async getAllUsers() {

        try {

            return await connection( TABLE_USERS ).select()


        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async getUserById( id: string ) {

        return await connection( TABLE_USERS ).select()
            .where( "id", "=", `${id}` )
    }

    public async editUser( id: string, user: { name: string, nickname: string, email: string } ) {

        try {

            return await connection( TABLE_USERS )
                .update( user )
                .where( { id: id } )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async deleteUser( id: string ) {
        try {

            return await connection( TABLE_USERS )
                .where( "id", "=", `${id}` )
                .delete()

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }
}