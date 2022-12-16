
import { IdGenerator } from './../services/IdGenerator';



export class UserModel {

    public id: string

    constructor(

         public name: string,
         public email: string,
         public password: string

    ) { this.id = IdGenerator() }





}