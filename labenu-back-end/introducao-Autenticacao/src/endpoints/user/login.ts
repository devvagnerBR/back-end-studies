import { Request, Response } from 'express';
import { authenticationData, Authenticator } from '../../services/Authenticator';
import { USER_MANAGEMENT } from './../../controller/User_management';
import { USER } from './../../models/User';
import connection from './../../database/connection';
import { TABLE_USERS } from './../../database/tableNames';


export const login = async ( req: Request, res: Response ) => {

    try {

        const { email, password } = req.body

        const config = new USER_MANAGEMENT()

        const [user] = await connection( TABLE_USERS )
            .select()
            .where( { email: email } )

        await config.login( email )

        const authenticator: Authenticator = new Authenticator()
        const payload: authenticationData = { id: user.id }

        const token = authenticator.GenerateToken( payload )

        res.status( 200 ).send( { data: token } )


    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}