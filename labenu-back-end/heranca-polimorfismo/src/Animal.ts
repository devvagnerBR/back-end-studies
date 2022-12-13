export class Animal {

    protected name: string;
    weight: number;

    constructor( name: string, weight: number ) {
        this.name = name;
        this.weight = weight;
    }

    protected eat( quantity: number ): void {
        console.log( `${this.name} has eaten ${quantity} of food` )
    }

    getName(): string {
        return this.name
    }

    getFood( quantity: number ): void {
        this.eat( quantity )
    }

}
