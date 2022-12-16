import { Request, Response } from "express";
import { TaskBusiness } from "../2_business/TaskBusiness";
import { TaskInputDTO } from './../5_model/taskDTO';


export class TaskController {


    public createTask = async ( req: Request, res: Response ) => {

        try {

            const { title, description, deadline, authorId } = req.body;
            const input: TaskInputDTO = { title, description, deadline, authorId }

            const taskBusiness = new TaskBusiness()
            await taskBusiness.createTask( input )

            res.status( 201 ).send( { message: "Tarefa criada!" } );

        } catch ( error: any ) {
            res.status( error.statusCode || 400 ).send( error.message || error.sqlMessage )
        }
    }

}
