import { BaseDatabase } from './BaseDatabase';
import { USER } from './../models/User';



export class UserDatabase extends BaseDatabase {

    private TABLE_USERS = 'fast_food_users'

    public async insertUser( user: USER ) {

        try {

        await UserDatabase.connection.insert( user )
                .into( this.TABLE_USERS )


        } catch ( error: any ) {
            throw new Error( error.message )
        }
    }

    public async getUsers() {

        try {

            return await UserDatabase
                .connection( this.TABLE_USERS )
                .select()

        } catch ( error: any ) {
            throw new Error( error.message )
        }

    }


    public async getUserById( id: string ) {

        try {

            return await UserDatabase
                .connection( this.TABLE_USERS )
                .select()
                .where( "id", "=", `${id}` )

        } catch ( error: any ) {
            throw new Error( error.message )
        }
    }

}