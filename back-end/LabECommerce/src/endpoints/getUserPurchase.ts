import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_PURCHASES } from './../database/tableNames';


export const getUserPurchase = async ( req: Request, res: Response ) => {


    let errorCode = 400;


    try {

        const { user_id } = req.params
        
        const result = await connection( LABECOMMERCE_PURCHASES )
            .select()
            .where( "user_id", "=", `${user_id}` )

        res.status( 200 ).send( { purchases: result } )


    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
}
