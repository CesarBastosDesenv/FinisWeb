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
    this.ativoId = data.ativoId;
    this.nomeAtivo = data.nomeAtivo;
    this.dtCompra = data.dtCompra;
    this.valorCompra = data.valorCompra;
    this.estimativaVenda = data.estimativaVenda;
    this.valorCota = data.valorCota;
    this.qtdCotas = data.qtdCotas;
    this.flVendido = data.flVendido;
    this.flBolsa = data.flBolsa;
    this.corretora = data.corretora;
    this.estrategia = data.estrategia;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}