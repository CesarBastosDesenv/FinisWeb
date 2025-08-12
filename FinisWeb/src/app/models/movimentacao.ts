export class movimentacao {
    public id : number;
    public tipoGasto : string;
    public dtMovimentacao : string;
    public flMovimentacao: number;
    public contaId: Date;
    public descricaoMovimentacao: string;
    public valorMovimentacao: boolean;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.tipoGasto = data.tipoGasto;
    this.dtMovimentacao = data.dtMovimentacao;
    this.flMovimentacao = data.flMovimentacao;
    this.contaId = data.contaId;
    this.descricaoMovimentacao = data.descricaoMovimentacao;
    this.valorMovimentacao = data.valorMovimentacao;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}