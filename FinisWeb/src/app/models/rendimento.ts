export class rendimento{
    public id : number;
    public ativoId : number;
    public anoRendimento: string;
    public mesRendimento: string;
    public qtdCotas: number;
    public valorRendimento: boolean;
    public valorRendimentoReais: Date;
    public flBolsa: string;
    public corretora: string;
    public dtRendimento: Date;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.ativoId = data.AtivoId;
    this.anoRendimento = data.AnoRendimento;
    this.mesRendimento = data.MesRendimento;
    this.qtdCotas = data.QtdCotas;
    this.valorRendimento = data.ValorRendimento;
    this.valorRendimentoReais = data.ValorRendimentoReais;
    this.flBolsa = data.FlBolsa;
    this.corretora = data.corretora;
    this.dtRendimento = data.DtRendimento;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}