import { Request, Response } from 'express';
import { USER_MANAGEMENT } from './../../controller/User_management';

export const editUser = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params;
        const { name, nickname, email } = req.body;


        const config = new USER_MANAGEMENT()
        const findUser = await config.getUserById( id )

        const update = {
            name: name || findUser[0].name,
            nickname: nickname || findUser[0].nickname,
            email: email || findUser[0].email
        }

        await config.editUser( id, update )
        res.status( 200 ).send( `Usuário atualizado com sucesso` )


    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}