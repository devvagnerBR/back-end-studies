import { Request, Response } from 'express';
import { User } from './../models/User';
import { USER_MANAGEMENT } from './userManagement';

export const getAllUser = async ( req: Request, res: Response ) => {

    try {

        const userDB = new USER_MANAGEMENT()
        const result = await userDB.getAllUser()

        res.status( 200 ).send( { users: result } )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}