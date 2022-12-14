import { Request, Response } from 'express';
import { TASK_MANAGEMENT } from './../../controller/Task_management';


export const getTaskById = async ( req: Request, res: Response ) => {

    try {

        const { id } = req.params
        const config = new TASK_MANAGEMENT()

        const result = await config.getTaskById( id )
        res.status( 200 ).send( { tasks: result } )


    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

}