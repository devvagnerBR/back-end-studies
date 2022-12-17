import { USER_DTO } from './../models/UserDTO';
import { UserModel } from './../models/UserModel';
import { UserDatabase } from './../data/UserDatabase';
import { USER } from './../models/User';
import { InvalidRequest } from '../error/InvalidRequest';
import { InvalidEmail } from './../error/InvalidEmail';
import { ShortPassword } from './../error/ShortPassword';
import { CustomError } from './../error/CustomError';
import { EmptyUsers } from './../error/EmptyUsers';
import { UserNotFound } from './../error/UserNotFound';


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



    public async getUserById( id: string ) {

        try {


            if ( !id ) throw new InvalidRequest();

            const userDatabase = new UserDatabase();
            return await userDatabase.getUserById( id );


        } catch ( error: any ) {

            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }
    }


    public async editUser( body: USER ) {

        try {

            const { id, name, email, password } = body;

            const userDatabase = new UserDatabase();
            const [user] = await userDatabase.getUserById( id );

            if ( !name || !email || password ) throw new InvalidRequest()
            if ( !id ) throw new InvalidRequest();
            if ( ![user] ) throw new UserNotFound();


            const update: USER = {

                id: user.id,
                name: name || user.name,
                email: email || user.email,
                password: password || user.password

            };

            await userDatabase.editUser( update )

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }
    }


    public async deleteUser( id: string ) {

        try {

            if ( !id ) throw new InvalidRequest();
            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser( id );

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        }
    }
}
