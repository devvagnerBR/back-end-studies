import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_PRODUCTS, LABECOMMERCE_PURCHASES } from '../database/tableNames';
import { v4 as uuidv4 } from 'uuid'

export const checkout = async ( req: Request, res: Response ) => {


    let errorCode = 400;

    try {

        const { user_id, product_id, quantity } = req.body

        const findProduct = await connection( LABECOMMERCE_PRODUCTS )
            .select()
            .where( "id", "=", `${product_id}` )

        const newPurchase = {
            id: uuidv4(),
            user_id,
            product_id,
            quantity,
            total_price: Number( findProduct[0].price * quantity )
        }


        await connection( LABECOMMERCE_PURCHASES ).insert( newPurchase )
        res.status( 200 ).send( { message: 'compra realizada com sucesso', purchase: newPurchase } )

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
}
