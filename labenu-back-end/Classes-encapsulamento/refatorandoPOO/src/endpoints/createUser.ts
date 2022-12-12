import { Request, Response } from 'express';
import { User } from './../models/User';
import { USER_MANAGEMENT } from './userManagement';

export const createUser = async ( req: Request, res: Response ) => {

    try {

        const { name, age, job } = req.body
        const user = new User( name, age, job )
        const userDB = new USER_MANAGEMENT()
        await userDB.createUser( user )

        res.status( 200 ).send( `Usuário ${name} criado com sucesso` )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}