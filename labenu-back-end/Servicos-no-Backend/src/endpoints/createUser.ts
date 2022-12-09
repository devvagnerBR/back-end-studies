import { Request, Response } from "express" // lembrar de sempre importar o req,res
import { getAddressInfo } from './../services/getAddressInfo';

export const createUser = async ( req: Request, res: Response ) => {

    try {

        const { zipcode } = req.body
        const address = await getAddressInfo( zipcode )

        if ( !address ) {
            throw new Error( 'Error on get address!' )
        }

        res.send( address )

    } catch ( error: any ) {

        res.send( { message: 'Unexpected error!' } )

    }

}