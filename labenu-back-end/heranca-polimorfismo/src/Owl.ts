import { Animal } from './Animal';

export class Owl extends Animal {

    chirp(): void {
        console.log( "hu hu" )
    }

    fly( quantity: number ): void {
        console.log( `the owl has flown for ` + quantity + quantity )
    }

    getName(): string {
        return this.name
    }

}