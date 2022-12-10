import { Request, Response } from "express";
import connection from "../database/connection";
import { TO_DO_USER } from './../database/tableNames';

export const getUserByNickname = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    try {

        let nickname = req.query.nickname as string;

        const result = await connection( TO_DO_USER )
            .select()
            .where( "nickname", "LIKE", `%${nickname}%` )
            .orWhere( "name", "LIKE", `%${nickname}%` )

        res.status( 200 ).send( result )

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }

}