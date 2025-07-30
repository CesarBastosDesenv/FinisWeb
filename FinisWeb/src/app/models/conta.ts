
export class conta {
    public id : number;
    public nomeConta : string;
    public contaPaiId : string;
    public valorSaldo: number;
    public dataCriacao: Date;
    public instituicao: string;
    public status: boolean;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.nomeConta = data.NomeConta;
    this.contaPaiId = data.ContaPaiId;
    this.valorSaldo = data.ValorSaldo;
    this.dataCriacao = data.DataCriacao;
    this.instituicao = data.Instituicao;
    this.status = data.status;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}