import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_TO_DO_RESPONSIBLE_USER_TASK_RELATION } from './../database/tableNames';


export const addUserAsResponsible = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const { taskId, responsibleUserId } = req.body
        
        const newResponsibleTask = {
            task_id: taskId,
            responsible_user_id: responsibleUserId
        }

        const result = await connection( TABLE_TO_DO_RESPONSIBLE_USER_TASK_RELATION ).insert( newResponsibleTask )
        res.status( 200 ).send( result )


    } catch ( error: any ) {

        res.status( errorCode ).send( { message: error.message } )
    }
}