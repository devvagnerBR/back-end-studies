import { Request, Response } from "express";
import { USER_DTO } from './../models/UserDTO';
import { UserBusiness } from './../2_business/UserBusiness';
import { UserDatabase } from './../3_data/UserDatabase';

export class UserController {

    public async CreateUser( req: Request, res: Response ) {

        try {

            const { name, email, password }: USER_DTO = req.body
            const user: USER_DTO = { name, email, password }
            const userBusiness = new UserBusiness()

            await userBusiness.createUser( user )
            res.status( 200 ).send( 'Usuário criado com sucesso!' )

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }

    }

    public async getUsers( req: Request, res: Response ) {

        try {

            const userDatabase = new UserDatabase()
            const result = await userDatabase.getUsers()

            res.status( 200 ).send( result )

        } catch ( error: any ) {

            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }


    }
}