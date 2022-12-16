import { CustomError } from './CustomError';



export class EmptyUsers extends CustomError {
    constructor() {
        super( 404, 'Nenhum usuário encontrado' )
    }
}