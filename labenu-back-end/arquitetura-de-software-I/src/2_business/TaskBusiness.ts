import { generateId } from '../4_services/generateId';
import { TaskDatabase } from './../3_data/TaskDatabase';
import { TaskInputDTO } from './../5_model/taskDTO';
import { CustomError } from './../6_error/CustomError';
import { InvalidRequest } from './../6_error/InvalidRequest';

export class TaskBusiness {

    public createTask = async ( input: TaskInputDTO ) => {

        try {

            const { title, description, deadline, authorId } = input;
            if ( !title || !description || !deadline || !authorId ) throw new InvalidRequest();

            const taskDatabase = new TaskDatabase();
            await taskDatabase.insertTask( { id: generateId(), title, description, deadline, authorId } );

        } catch ( error: any ) {
            throw new CustomError( error.statusCode, error.message || error.sqlMessage )
        };

    };
};