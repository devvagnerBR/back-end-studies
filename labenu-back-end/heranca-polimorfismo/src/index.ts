
// import { app } from './app';
// import { Animal } from './Animal';
import { CustomError } from './CustomError';
import { Dog } from './Dog';
import { Owl } from './Owl';
import { PessoaDesenvolvedora } from './PessoaDesenvolvedora';
import { ISA } from './PessoaDesenvolvedora';


// class Mother {

//     private name: string
//     public sobrenome: string = "Guimarães"

//     constructor( name: string ) {
//         this.name = name
//     }

//     pegarNome(): string {
//         return this.name
//     }
// }


// class Son extends Mother {

//     work: string
//     constructor( name: string, work: string ) {
//         super( name )
//         this.work = work
//     }

// }

// const lilMother = new Mother( "Graça" )
// const wagner = new Son( "Wagner", "front-end developer" )
// const amigo = new Son( "Paulo", "back-end developer" )

// console.log( wagner.pegarNome(), wagner.work );
// console.log( amigo.pegarNome(), amigo.work );



//Exemplo 1--------------------------------------------
// const coruja = new Owl( "Coruja", 50 )
// console.log( coruja.getName() )


// const cachorro = new Dog( "Cachorro", 500 )
// console.log( cachorro.getFood( 300 ) );


// console.log( cachorro.getName() )

//Exemplo 2 ------------------------------------------
// const notFound = new CustomError( 404, "Not found" )
// console.log( notFound.statusCode, notFound.message );
    
PessoaDesenvolvedora.porcentagemProvi = 0.17

const paulo = new PessoaDesenvolvedora( "Paulo", 3000 )
console.log( paulo.pegarDividaProvi().toFixed( 2 ) );

const wagner = new PessoaDesenvolvedora( "Wagner", 4500 )
console.log( wagner.pegarDividaProvi().toFixed( 2 ) );

// wagner.mudarPorcentagemProvi( 0.17 )
// console.log( wagner.pegarDividaProvi() );
