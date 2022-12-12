import { Cachorro } from './Cachorro';

const bob_Destruidor: Cachorro = new Cachorro( 1, "Pinscher", "Bob" )
const cachorro_sem_nome: Cachorro = new Cachorro( 2, "Beagle" )

console.log( 'imprimindo bob', bob_Destruidor );
bob_Destruidor.comer( 3.4 )
console.log( 'imprimindo bob', bob_Destruidor );


cachorro_sem_nome.mudarNome( 'Amora' )
console.log( cachorro_sem_nome );
