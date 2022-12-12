export class Cachorro {

    nome: string
    peso: number
    raca: string

    constructor( peso: number, raca: string, nome?: string, ) {

        // if ( nome ) this.nome = nome
        // else this.nome = 'sem nome'
        this.nome = nome || 'sem nome' // se não for passado um nome atribui "sem nome" ao nome.
        this.peso = peso
        this.raca = raca

    }

    latir(): void {
        console.log( 'auau' );

    }

    comer( quantidade: number ): void {
        this.peso += quantidade
        console.log( `O cachorro comeu ${quantidade} e agora tem ${this.peso}` );
    }

    mudarNome( novoNome: string ) {
        this.nome = novoNome
    }

}