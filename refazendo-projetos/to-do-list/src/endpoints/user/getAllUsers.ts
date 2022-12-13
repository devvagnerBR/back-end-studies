import { Request, Response } from 'express';
import { USER } from './../../models/User';
import { USER_MANAGEMENT } from './../../controller/User_management';

export const getAllUsers = async ( req: Request, res: Response ) => {

    try {

        const config = new USER_MANAGEMENT()
        const result = await config.getAllUsers()
        
        res.status( 200 ).send( { users: result } )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}