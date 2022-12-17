import { CustomError } from './CustomError';



export class InvalidPrice extends CustomError {
    constructor() {
        super( 406, 'Preço não pode ser menor ou igual a zero' )
    }
}