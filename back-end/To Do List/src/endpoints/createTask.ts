import { Request, Response } from "express";
import connection from "../database/connection";
import { TO_DO_TASK } from "../database/tableNames";
import { v4 as uuidv4 } from 'uuid'
import { TO_DO_USER } from './../database/tableNames';

export const createTask = async ( req: Request, res: Response ) => {

    let errorCode = 400

    try {

        const { title, description, limitDate, creatorUserId } = req.body

        const findUser = await connection( TO_DO_USER )
            .select()
            .where( "id", "=", `${creatorUserId}` )

        const newTask = {

            id: uuidv4(),
            title,
            description,
            limit_date: limitDate,
            creator_user_id: creatorUserId

        }

        await connection( TO_DO_TASK ).insert( newTask )
        res.status( 200 ).send( { message: 'tarefa adicionada com sucesso', newTask: newTask } )


    } catch ( error: any ) {
        res.status( errorCode ).send( { message: error.message } )
    }


}