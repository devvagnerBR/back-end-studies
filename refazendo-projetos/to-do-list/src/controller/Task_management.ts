import { knex } from 'knex';
import dotenv from 'dotenv';
import connection from '../database/connection';
import { TABLE_TASKS } from '../database/tableNames';
import { TASK } from './../models/Task';




dotenv.config()

export class TASK_MANAGEMENT {


    public async createTask( task: TASK ) {
        try {
            return await connection( TABLE_TASKS ).insert( task )
        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }


    }

    public async getTaskById( id: string ) {
        try {

            return await connection( TABLE_TASKS )
                .select( "id", "name", "description", "created_at", "status" )
                .where( "user_id", "=", `${id}` )

        } catch ( error: any ) {
            throw new Error( error.sqlMessage || error.message )
        }
    }
}