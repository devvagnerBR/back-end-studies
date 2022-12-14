import { v4 as uuidv4 } from 'uuid';

export class USER {

    private id: string;

    constructor(
        private name: string,
        private nickname: string,
        private email: string ) {
        this.id = uuidv4()
    }

}