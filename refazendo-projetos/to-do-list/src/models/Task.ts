import { v4 as uuidv4 } from 'uuid';
export class TASK {

    private task_id: string;
    private task_status: boolean
    private task_created_at: string

    constructor(
        private task_name: string,
        private task_description: string,
        private user_id: string ) {

        this.task_id = uuidv4();
        this.task_status = false;
        this.task_created_at = Date.now().toString()
    }
}