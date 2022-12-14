import { Request, Response } from 'express';
import { USER } from './../../models/User';
import { USER_MANAGEMENT } from './../../controller/User_management';

export const createUser = async ( req: Request, res: Response ) => {

    try {

        const { name, nickname, email } = req.body
        const user = new USER( name, nickname, email )
        const db = new USER_MANAGEMENT()

        await db.createUser( user )
        res.status( 200 ).send( { message: `Usuário criado com sucesso` } )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}