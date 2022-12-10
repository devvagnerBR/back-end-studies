import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_PRODUCTS } from '../database/tableNames';
import { v4 as uuidv4 } from 'uuid'

export const createProduct = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    const { name, price, image_url } = req.body

    const newProduct = {
        id: uuidv4(),
        name,
        price,
        image_url
    }

    await connection( LABECOMMERCE_PRODUCTS ).insert( newProduct )
    res.status( 200 ).send( `Produto cadastrado com sucesso` )

    try {

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }


}