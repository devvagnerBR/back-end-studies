
import { UserDatabase } from '../3_data/UserDatabase';
import { InvalidRequest } from '../error/InvalidRequest';
import { UserModel } from '../models/UserModel';
import { USER_DTO } from '../models/UserDTO';
import { BaseDatabase } from '../3_data/BaseDatabase';


export class UserBusiness {


    public async createUser( input: USER_DTO ) {

        try {

            const { name, email, password } = input;
            if ( !name || !email || !password ) throw new InvalidRequest();

            const user = new UserModel( name, email, password )
            const userDatabase = new UserDatabase()

            await userDatabase.insertUser( user )

        } catch ( error: any ) {
            throw new Error( error.message || error.sqlMessage )
        }
    }


}