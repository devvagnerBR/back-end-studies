import { UserDatabase } from "../3_data/UserDatabase"
import { generateId } from "../4_services/generateId";
import { UserInputDTO } from './../5_model/userDTO';
import { InvalidRequest } from './../6_error/InvalidRequest';
import { CustomError } from './../6_error/CustomError';
import { InvalidEmail } from './../6_error/InvalidEmail';
import { ShortName } from './../6_error/ShortName';


export class UserBusiness {

   // 0.2;
   // tratamento de dados vindo do (0.1);
   // regras de negócio e tratamento;

   public createUser = async ( input: UserInputDTO ) => {

      try {

         const { name, nickname, email, password } = input
         if ( !name || !nickname || !email || !password ) throw new InvalidRequest();
         if ( !email.includes( "@" ) ) throw new InvalidEmail();
         if ( name.length > 3 ) throw new ShortName();


         const userDataBase = new UserDatabase()

         await userDataBase.insertUser( { id: generateId(), name, nickname, email, password } )

      } catch ( error: any ) {
         throw new CustomError( error.statusCode, error.message || error.sqlMessage )
      }
   }
}
