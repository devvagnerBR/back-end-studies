export interface ISA {
    ISA: boolean
    falar(): string
}

export class PessoaDesenvolvedora implements ISA {

    ISA: boolean = true
    private name: string;
    private salarioBruto: number;
    private dividaProvi: number;
    public static porcentagemProvi: number = 0.15;

    constructor( name: string, salarioBruto: number ) {

        this.name = name;
        this.salarioBruto = salarioBruto;
        this.dividaProvi = salarioBruto * PessoaDesenvolvedora.porcentagemProvi;

    }

    public falar(): string {
        return "Bom dia"
    }

    public pegarSalario() {
        return this.salarioBruto;
    }

    public mudarSalario( novoSalario: number ): void {
        this.salarioBruto = novoSalario;
    }

    public mudarPorcentagemProvi( novaPorcentagem: number ): void {
        PessoaDesenvolvedora.porcentagemProvi = novaPorcentagem;
        this.dividaProvi = this.salarioBruto * novaPorcentagem
    }

    public pegarNome() {
        return this.name
    }

    public pegarDividaProvi(): number {
        return this.dividaProvi
    }

}
