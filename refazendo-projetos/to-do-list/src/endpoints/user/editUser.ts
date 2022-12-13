import { Request, Response } from 'express';
import { USER_MANAGEMENT } from './../../controller/User_management';

export const editUser = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params;
        const { user_name, user_nickname, user_email } = req.body;


        const config = new USER_MANAGEMENT()
        const findUser = await config.getUserById( id )

        const update = {
            user_name: user_name || findUser[0].user_name,
            user_nickname: user_nickname || findUser[0].user_nickname,
            user_email: user_email || findUser[0].user_email
        }

        await config.editUser( id, update )
        res.status( 200 ).send( `Usuário atualizado com sucesso` )


    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}