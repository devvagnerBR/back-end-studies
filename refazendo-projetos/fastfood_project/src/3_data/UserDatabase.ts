import { BaseDatabase } from "./BaseDatabase";
import { USER } from '../models/User';


export class UserDatabase extends BaseDatabase {

    private TABLE_USERS = 'fast_food_users'

    public insertUser = async ( user: USER ) => {

        try {

            await UserDatabase.connection
                .insert( user )
                .into( this.TABLE_USERS )

        } catch ( error: any ) {
            throw new Error( error.message )
        }

    }



}
