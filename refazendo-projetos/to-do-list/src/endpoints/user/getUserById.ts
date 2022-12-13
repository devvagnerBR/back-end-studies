import { Request, Response } from 'express';
import { USER_MANAGEMENT } from './../../controller/User_management';


export const getUserById = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params
        const config = new USER_MANAGEMENT()
        const result = await config.getUserById( id )

        res.status( 200 ).send( { user: result } )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}