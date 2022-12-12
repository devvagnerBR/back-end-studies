import { v4 as uuidv4 } from 'uuid';

export class User {
    private id: string
    private name: string
    private age: number
    private job: string

    constructor( name: string, age: number, job: string ) {
        this.id = uuidv4(),
            this.name = name,
            this.age = age,
            this.job = job
    }
}   
