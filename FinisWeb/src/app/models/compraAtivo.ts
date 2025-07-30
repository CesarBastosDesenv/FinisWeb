export class compraAtivo {
    public id : number;
    public ativoId : number;
    public nomeAtivo : string;
    public dtCompra: Date;
    public valorCompra: number;
    public estimativaVenda: number;
    public valorCota: number;
    public qtdCotas: number;
    public flVendido: boolean;
    public flBolsa: string;
    public corretora: string;
    public estrategia: string;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.ativoId = data.AtivoId;
    this.nomeAtivo = data.NomeAtivo;
    this.dtCompra = data.DtCompra;
    this.valorCompra = data.ValorCompra;
    this.estimativaVenda = data.EstimativaVenda;
    this.valorCota = data.ValorCota;
    this.qtdCotas = data.QtdCotas;
    this.flVendido = data.FlVendido;
    this.flBolsa = data.FlBolsa;
    this.corretora = data.Corretora;
    this.estrategia = data.Estrategia;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}