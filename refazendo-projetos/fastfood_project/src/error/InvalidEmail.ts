import { CustomError } from './CustomError';



export class InvalidEmail extends CustomError {
    constructor() {
        super( 421, 'Email inválido' )
    }
}