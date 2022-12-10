import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_USERS } from './../database/tableNames';

export const getAllUsers = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const result = await connection( LABECOMMERCE_USERS )
            .select()
        res.status( 200 ).send( result )


    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }

    
}