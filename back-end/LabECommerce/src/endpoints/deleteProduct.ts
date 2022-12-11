import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_PRODUCTS } from './../database/tableNames';

export const deleteProduct = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    try {

        const { id } = req.params

        const findProduct = await connection( LABECOMMERCE_PRODUCTS )
            .select()
            .where( "id", "=", `${id}` )

        await connection( LABECOMMERCE_PRODUCTS )
            .where( { id: id } ).delete()

        res.status( 200 ).send( `produto: ${findProduct[0].name} deletado com sucesso!` )



    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
}