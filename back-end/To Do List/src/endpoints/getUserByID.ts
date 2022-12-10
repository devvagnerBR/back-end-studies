import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_TO_DO_LIST_USER } from "../database/tableNames";


export const getUserById = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const { id } = req.params

        const result = await connection( TABLE_TO_DO_LIST_USER )

            .select()
            .where( "id", "=", `${id}` )
        res.status( 200 ).send( { user: result } )

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }


}