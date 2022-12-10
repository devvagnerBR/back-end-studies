import { Request, Response } from 'express'
import connection from '../database/connection'
import { TABLE_TO_DO_LIST_USER } from '../database/tableNames'
import { USER } from '../models/USER'
import { v4 as uuidv4 } from 'uuid'


export const createUser = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const { name, nickname, email } = req.body

        const newUser: USER = {
            id: uuidv4(),
            name,
            nickname,
            email
        }


        await connection( TABLE_TO_DO_LIST_USER ).insert( newUser )
        res.status( 200 ).send( { user: newUser, message: `Usuário criado com sucesso` } )

    } catch ( error: any ) {

        res.status( errorCode ).send( { message: error.message } )

    }

}