import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_PRODUCTS } from '../database/tableNames';



export const getAllProducts = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    try {

        const result = await connection( LABECOMMERCE_PRODUCTS ).select()
        res.status( 200 ).send( { products: result } )

    } catch ( error: any ) {

        res.status( errorCode ).send( { message: error.message } )

    }
}