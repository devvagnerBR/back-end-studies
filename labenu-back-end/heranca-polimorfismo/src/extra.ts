
class Pessoa {
    public id: number;
    constructor( public nome: string, public idade: number ){ this.id = Date.now() }
}

const wagner = new Pessoa( "Wagner", 34 )
