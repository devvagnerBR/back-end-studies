import { Request, Response } from 'express';
import { User } from './../models/User';
import { USER_MANAGEMENT } from './userManagement';

export const getUserById = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params
        const userDB = new USER_MANAGEMENT()
        const result = await userDB.getUserById( id )

        res.status( 200 ).send( { user: result } )


    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}