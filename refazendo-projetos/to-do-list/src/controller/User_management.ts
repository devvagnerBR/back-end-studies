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

    public async getUserById( user_id: string ) {

        return await connection( TABLE_USERS ).select()
            .where( "user_id", "=", `${user_id}` )
    }

    public async editUser( user_id: string, user: { user_name: string, user_nickname: string, user_email: string } ) {

        try {

            return await connection( TABLE_USERS )
                .update( user )
                .where( { user_id: user_id } )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }
}