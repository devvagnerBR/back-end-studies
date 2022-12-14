import { Request, Response } from 'express'
import { USER_MANAGEMENT } from './../../controller/User_management';


export const deleteUser = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params
        const config = new USER_MANAGEMENT()
        
        await config.deleteUser( id )
        res.status( 200 ).send( `Usuário deletado com sucesso` )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }
}