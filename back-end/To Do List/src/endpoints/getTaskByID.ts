import { Request, Response } from "express";
import connection from "../database/connection";
import { TO_DO_TASK } from "../database/tableNames";

export const getTaskById = async ( req: Request, res: Response ) => {


    let errorCode = 400;

    try {

        const { id } = req.params
        const result = await connection( TO_DO_TASK )
            .select()
            .where( "creator_user_id", "=", `${id}` )
        res.status( 200 ).send( { message: `tasks from id: ${id}`, tasks: result } )

    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }
}