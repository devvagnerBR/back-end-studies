import { Request, Response } from 'express';
import { USER_MANAGEMENT } from './userManagement';

export const deleteUser = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params
        const userDB = new USER_MANAGEMENT()
        userDB.deleteUser( id )

        res.status( 200 ).send( 'usuário deletado com sucesso' )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }


}