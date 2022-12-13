import { v4 as uuidv4 } from 'uuid';

export class USER {

    private user_id: string;

    constructor(
        private user_name: string,
        private user_nickname: string,
        private user_email: string ) {
        this.user_id = uuidv4()
    }

}