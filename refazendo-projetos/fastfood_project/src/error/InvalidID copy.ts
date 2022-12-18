import { CustomError } from './CustomError';



export class InvalidId extends CustomError {
    constructor() {
        super( 404, 'Id inválido, id pode ter somente 36 caracteres' )
    }
}