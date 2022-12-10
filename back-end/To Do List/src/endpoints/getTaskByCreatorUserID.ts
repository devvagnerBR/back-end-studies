import { Request, Response } from "express";

import connection from "../database/connection";
import { TO_DO_TASK } from "../database/tableNames";

export const getTaskByCreatorUserID = async ( req: Request, res: Response ) => {

    let errorCode = 400;

    try {

        let creatorUserId = req.query.creatorUserId as string;
        
        const result = await connection( TO_DO_TASK )
        .select()
        .where( "creator_user_id", "=", `${creatorUserId}` )

        res.status( 200 ).send( result )

    } catch ( error: any ) {

        res.status( errorCode ).send( { message: error.message } )
    }
}