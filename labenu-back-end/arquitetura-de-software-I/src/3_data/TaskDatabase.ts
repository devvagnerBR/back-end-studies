import { BaseDatabase } from "./BaseDatabase";



export class TaskDatabase extends BaseDatabase {

    private TASK_TABLE = 'Architecture_User'

    public insertTask = async ( task: any ) => {

        try {
            
            const { id, title, description, deadline, authorId } = task;
            await TaskDatabase.connection( this.TASK_TABLE )
                .insert( {
                    id,
                    title,
                    description,
                    deadline,
                    authorId
                } )

        } catch ( error: any ) {

        }
    }

}
