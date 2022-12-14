import { v4 as uuidv4 } from 'uuid';
export class TASK {

    private id: string;
    private status: boolean
    private created_at: Date

    constructor(
        private name: string,
        private description: string,
        private user_id: string ) {

        this.id = uuidv4();
        this.status = false;
        this.created_at = new Date()
    }
}