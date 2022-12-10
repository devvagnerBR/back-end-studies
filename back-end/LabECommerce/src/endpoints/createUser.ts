import { Request, Response } from 'express'
import connection from '../database/connection'

import { v4 as uuidv4 } from 'uuid'
import { LABECOMMERCE_USERS } from './../database/tableNames';

export const createUser = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    try {

        const { name, email, password } = req.body
        await connection( LABECOMMERCE_USERS ).insert( {
            id: uuidv4(),
            name: name,
            email: email,
            password: password
        } );

        res.status( 200 ).send( `Usuário cadastrado com sucesso` )


    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
}