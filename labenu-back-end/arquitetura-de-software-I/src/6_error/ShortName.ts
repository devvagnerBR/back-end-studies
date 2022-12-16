import { CustomError } from './CustomError';


export class ShortName extends CustomError {
    constructor() {
        super( 411, 'Campo nome precisa ter pelo menos 3 caracteres' ) // 411 length required;
    }
}
