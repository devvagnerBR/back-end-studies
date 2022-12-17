import { CustomError } from './CustomError';



export class ShortName extends CustomError {
    constructor() {
        super( 411, 'Name precisa ter 3 caracteres ou mais' )
    }
}