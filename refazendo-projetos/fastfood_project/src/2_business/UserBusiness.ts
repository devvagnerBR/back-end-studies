import { USER_DTO } from './../models/UserDTO';
import { UserModel } from './../models/UserModel';
import { UserDatabase } from './../3_data/UserDatabase';
import { USER } from './../models/User';
import { InvalidRequest } from '../error/InvalidRequest';
import { InvalidEmail } from './../error/InvalidEmail';
import { ShortPassword } from './../error/ShortPassword';
import { CustomError } from './../error/CustomError';
import { EmptyUsers } from './../error/EmptyUsers';


export class UserBusiness {

    public async createUser( user: USER_DTO ) {

        try {

            const { name, email, password } = user;

            if ( !name || !email || !password ) throw new InvalidRequest();
            if ( !email.includes( '@' ) ) throw new InvalidEmail();
            if ( password.length < 3 ) throw new ShortPassword();

            const newUser: USER = new UserModel( name, email, password )
            const userDatabase = new UserDatabase()
            await userDatabase.insertUser( newUser )

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }
    }


}
