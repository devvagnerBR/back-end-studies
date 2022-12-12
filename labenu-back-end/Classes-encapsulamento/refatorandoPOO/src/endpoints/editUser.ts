import { Request, Response } from 'express';
import { USER_MANAGEMENT } from './userManagement';

export const editUser = async ( req: Request, res: Response ) => {


    try {

        const { id } = req.params
        const { name, age, job } = req.body
        const userDB = new USER_MANAGEMENT()
        const findUser = await userDB.getUserById( id )

        const userUpdated = {
            name: name || findUser[0].name,
            age: age || findUser[0].age,
            job: job || findUser[0].job
        }

        await userDB.editUser( userUpdated, id )
        res.status( 200 ).send( { message: 'dados alterados com sucesso', update: userUpdated } )



    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}