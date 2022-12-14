import { Request, Response } from "express";
import { UserBusiness } from '../2_business/UserBusiness';
import { UserInputDTO } from './../5_model/userDTO';

export class UserController {

   public createUser = async ( req: Request, res: Response ) => {

      // 0.1;
      // primeiro contato com os dados vindo do Front-End;
      // manda para as regras de negócio do user(0.2);
      // recebe requisições e envia respostas;

      try {
         const { name, nickname, email, password } = req.body
         const input: UserInputDTO = { name, nickname, email, password }

         const userBusiness = new UserBusiness()
         await userBusiness.createUser( input )

         res.status( 201 ).send( { message: "Usuário criado!" } )

      } catch ( error: any ) {
         res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
      }
   }

}