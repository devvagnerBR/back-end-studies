import { v4 as uuid } from 'uuid';

export class USER {

    private id: string;

    constructor(
        private name: string,
        private nickname: string,
        private email: string,
        private password: string ) {
        this.id = uuid()
    }

}
