import { CustomError } from './CustomError';



export class InvalidRequest extends CustomError {
    constructor() {
        super( 404, 'Requisição Inválida, um ou mais campos vazios' )
    }
}