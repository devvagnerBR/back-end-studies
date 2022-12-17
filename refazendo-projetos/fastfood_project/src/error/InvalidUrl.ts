import { CustomError } from './CustomError';



export class InvalidURL extends CustomError {
    constructor() {
        super( 404, 'URL inválida tente passar algo como: https://seulink.com' )
    }
}