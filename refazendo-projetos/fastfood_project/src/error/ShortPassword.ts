import { CustomError } from './CustomError';



export class ShortPassword extends CustomError {
    constructor() {
        super( 420, 'Senha precisa ter mais do que 3 caracteres' )
    }
}