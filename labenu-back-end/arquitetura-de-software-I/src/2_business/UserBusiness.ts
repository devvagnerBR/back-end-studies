import { UserDatabase } from "../3_data/UserDatabase"


export class UserBusiness {

   // 0.2;
   // tratamento de dados vindo do (0.1);
   // regras de negócio e tratamento;

   public createUser = async ( input: any ) => {

      try {
         const { name, nickname, email, password } = input
         if ( !name || !nickname || !email || !password ) throw new Error( `Preencha os campos!` )

         const id: string = Date.now().toString()
         const userDataBase = new UserDatabase()

         await userDataBase.insertUser( { id, name, nickname, email, password } )

      } catch ( error: any ) {
         throw new Error( error.message )
      }
   }
}
