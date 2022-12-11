import { Request, Response } from 'express'
import connection from '../database/connection'
import { LABECOMMERCE_PRODUCTS } from '../database/tableNames';



export const getAllProducts = async ( req: Request, res: Response ) => {

    let errorCode = 400;
    // http://localhost:3000/products?sort=price&order=ASC
    
    try {

        let name = req.query.product as string;
        let sort = req.query.sort as string;
        let order = req.query.order as string;

        let size = Number( req.query.size )
        let page = Number( req.query.page )

        if ( !name ) name = "%";
        if ( !sort ) sort = "name";
        if ( order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" ) order = "ASC";
        if ( sort !== "name" && sort !== "price" ) sort = "name";

        if ( isNaN( size ) || size < 1 ) size = 10;
        if ( isNaN( page ) || page < 1 ) page = 1;

        let offset = size * ( page - 1 )

        const result = await connection( LABECOMMERCE_PRODUCTS )
            .where( "name", "like", `%${name}%` )
            .orderBy( sort, order ) // Nome | ASC ou DESC
            .limit( size )
            .offset( offset )

        if ( result.length < 1 ) {
            errorCode = 404
            throw new Error( "Nenhuma receita encontrada" )
        }


        res.status( 200 ).send( { products: result } )

    } catch ( error: any ) {

        res.status( errorCode ).send( { message: error.message } )

    }
}