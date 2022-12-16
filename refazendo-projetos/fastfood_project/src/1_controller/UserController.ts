import { Request, Response } from "express";
import { USER_DTO } from '../models/UserDTO';
import { UserBusiness } from '../2_business/UserBusiness';

export class UserController {

    public createUser = async ( req: Request, res: Response ) => {

        try {

            const { name, email, password } = req.body;
            const input: USER_DTO = { name, email, password };
            const userBusiness = new UserBusiness()

            await userBusiness.createUser( input )
            res.status(200).send('Usuário criado com sucesso!')

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }
    }

}