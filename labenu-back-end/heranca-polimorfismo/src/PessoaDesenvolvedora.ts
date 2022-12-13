interface ISA {
    ISA: boolean
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

    pegarSalario() {
        return this.salarioBruto;
    }

    mudarSalario( novoSalario: number ): void {
        this.salarioBruto = novoSalario;
    }

    mudarPorcentagemProvi( novaPorcentagem: number ): void {
        PessoaDesenvolvedora.porcentagemProvi = novaPorcentagem;
        this.dividaProvi = this.salarioBruto * novaPorcentagem
    }

    pegarNome() {
        return this.name
    }

    pegarDividaProvi(): number {
        return this.dividaProvi
    }

}
