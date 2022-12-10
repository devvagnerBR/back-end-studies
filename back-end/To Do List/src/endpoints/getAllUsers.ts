import { Request, Response } from "express";
import connection from "../database/connection";
import { TO_DO_USER } from './../database/tableNames';

export const getAllUsers = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    try {

        const result = await connection( TO_DO_USER )
            .select()
        res.status( 200 ).send( result )


    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
}