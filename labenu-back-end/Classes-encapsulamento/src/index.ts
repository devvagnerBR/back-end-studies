import { Cachorro } from './Cachorro';
import { Character } from './data/Character'
import { app } from './app';
import { Request, Response } from 'express';
import { CharacterDataBase } from './data/CharacterDataBase';



app.get( '/character', async ( req: Request, res: Response ) => {
    try {
        const characterDB = new CharacterDataBase()
        const result = await characterDB.getAll()
        res.status( 200 ).send( result )
    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }
} )


app.post( '/character', async ( req: Request, res: Response ) => {

    try {

        const { name, gender, age, description, } = req.body
        const character = new Character( name, description, age, gender )
        const CharacterDB = new CharacterDataBase()
        const result = await CharacterDB.createCharacter( character )
        
        res.status( 200 ).send( 'Personagem criado com sucesso!' )

    } catch ( error: any ) {
        throw new Error( error.sqlMessage || error.message )
    }

} )


























// const bob_Destruidor: Cachorro = new Cachorro( 1, "Pinscher", "Bob" )
// const cachorro_sem_nome: Cachorro = new Cachorro( 2, "Beagle" )

// console.log( 'imprimindo bob', bob_Destruidor );
// bob_Destruidor.comer( 3.4 )
// console.log( 'imprimindo bob', bob_Destruidor );


// cachorro_sem_nome.mudarNome( 'Amora' )
// console.log( cachorro_sem_nome );



// const Peter_Parker: Character = new Character( "Homem Aranha", "Super-herói da Marvel", 17, "MALE" )
// const Bruce_Wayne: Character = new Character( "Batman", "Super-herói da DC", 27, "MALE" )

// console.log( Peter_Parker );
// console.log( Bruce_Wayne );
