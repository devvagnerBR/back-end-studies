import { v4 as ID } from 'uuid'
import { TaskDatabase } from './../3_data/TaskDatabase';

export class TaskBusiness {

    public createTask = async ( input: any ) => {

        try {

            const { title, description, deadline, authorId } = input;
            if ( !title || !description || !deadline || !authorId ) throw new Error( `Preencha os campos!` );

            const taskDatabase = new TaskDatabase();
            await taskDatabase.insertTask( { id:ID(), title, description, deadline, authorId } );

        } catch ( error: any ) {
            throw new Error( error.message )
        };

    };
};