import { Request, Response } from 'express';
import { USER } from './../../models/User';
import { USER_MANAGEMENT } from './../../controller/User_management';

export const createUser = async ( req: Request, res: Response ) => {

    try {

        const { user_name, user_nickname, user_email } = req.body
        const user = new USER( user_name, user_nickname, user_email )
        const db = new USER_MANAGEMENT()
        
        await db.createUser( user )
        res.status( 200 ).send( { message: `Usuário criado com sucesso` } )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }
    
}