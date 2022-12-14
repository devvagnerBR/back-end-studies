import { Request, Response } from 'express';
import { USER } from './../../models/User';
import { USER_MANAGEMENT } from './../../controller/User_management';
import { authenticationData, Authenticator } from '../../services/Authenticator';

export const createUser = async ( req: Request, res: Response ): Promise<void> => {

    try {

        const { name, nickname, email, password } = req.body
        const user = new USER( name, nickname, email, password )
        const db = new USER_MANAGEMENT()

        await db.createUser( user )

        const authenticator: Authenticator = new Authenticator()
        const payload: authenticationData = { id: user.getId() }

        const token = authenticator.GenerateToken( payload )
        res.status( 200 ).send( { message: `Usuário criado com sucesso`, data: token } )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}