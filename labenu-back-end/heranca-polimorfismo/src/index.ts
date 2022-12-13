
// import { app } from './app';
// app.get( "/users" )

class Mother {
    private name: string
    sobrenome: string = "Guimarães"

    constructor( name: string ) {
        this.name = name
    }

    pegarNome(): string {
        return this.name
    }


}


class Son extends Mother {

    work: string
    constructor( name: string, work: string ) {
        super( name )
        this.work = work
    }

}

const lilMother = new Mother( "Graça" )
const wagner = new Son( "Wagner", "front-end developer" )
const amigo = new Son( "Paulo", "back-end developer" )

console.log( wagner.pegarNome(), wagner.work );
console.log( amigo.pegarNome(), amigo.work );