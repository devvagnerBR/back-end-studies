import { Request, Response } from 'express';
import { authenticationData, Authenticator } from '../../services/Authenticator';
import { USER_MANAGEMENT } from './../../controller/User_management';

export const editUser = async ( req: Request, res: Response ) => {

    try {

        const { name, nickname, email } = req.body;
        const token = req.headers.authorization as string;

        const authenticator: Authenticator = new Authenticator()
        const tokenData = authenticator.GetTokenData( token ) as authenticationData

        const config = new USER_MANAGEMENT()
        const [findUser] = await config.getUserById( tokenData.id )


        const update = {
            name: name || findUser.name,
            nickname: nickname || findUser.nickname,
            email: email || findUser.email
        }



        await config.editUser( tokenData.id, update )
        res.status( 200 ).send( `Usuário atualizado com sucesso` )


    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}