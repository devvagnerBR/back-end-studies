import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

   // 0.3;
   // conecta no banco e inseri novo user;
   // formato MySQL;


   public insertUser = async ( user: user ) => {

      try {
         await UserDatabase.connection.insert( {
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            password: user.password
         } ).into( 'Architecture_User' )

      } catch ( error: any ) {
         throw new Error( error.message )
      }

   }

}
