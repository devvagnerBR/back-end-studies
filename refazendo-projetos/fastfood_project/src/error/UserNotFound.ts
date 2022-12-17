import { CustomError } from './CustomError';



export class UserNotFound extends CustomError {

    constructor() {
        super( 404, 'Usuário não encontrado ou id inválido' )
    }
}