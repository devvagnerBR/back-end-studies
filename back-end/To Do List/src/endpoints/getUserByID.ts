import { Request, Response } from "express";
import connection from "../database/connection";
import { TO_DO_USER } from "../database/tableNames";


export const getUserById = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const { id } = req.params

        const result = await connection( TO_DO_USER )
            .select()
            .where( "id", "=", `${id}` )


        res.status( 200 ).send( { user: result } )

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }


}