import { Request, Response } from 'express';
import { TASK } from './../../models/Task';
import { TASK_MANAGEMENT } from './../../controller/Task_management';


export const createTask = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params
        const { name, description } = req.body

        const task = new TASK( name, description, id )
        const config = new TASK_MANAGEMENT()

        await config.createTask( task )
        res.status( 200 ).send( { message: `task adicionada com sucesso` } )



    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}
