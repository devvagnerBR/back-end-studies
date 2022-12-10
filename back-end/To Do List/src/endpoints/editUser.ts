import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_TO_DO_LIST_USER } from './../database/tableNames';


export const editUser = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const { id } = req.params
        const { name, nickname, email } = req.body


        const findUser = await connection( TABLE_TO_DO_LIST_USER )
            .select()
            .where( "id", "=", `${id}` )

        // console.log( findUser[0].name);


        const updateUser = {
            name: name || findUser[0].name,
            nickname: nickname || findUser[0].nickname,
            email: email || findUser[0].email
        }

        await connection( TABLE_TO_DO_LIST_USER )
        
            .update( updateUser )
            .where( { id: id } )

        res.status( 200 ).send( { update: updateUser } )


    } catch ( error: any ) {

        res.status( errorCode ).send( { message: error.message } )
    }
}