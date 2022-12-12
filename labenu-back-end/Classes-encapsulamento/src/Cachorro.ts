export class Cachorro {

    private nome: string
    private peso: number
    private raca: string

    public getNome(): string {
        return this.nome
    }

    public setNome( novoNome: string ) {
        this.nome = novoNome
    }
    constructor( peso: number, raca: string, nome?: string, ) {

        this.nome = nome || 'sem nome' 
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