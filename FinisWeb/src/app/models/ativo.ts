export class ativo {
    public id : number;
    public nomeAtivo : string;
    public nomeAtivoCompleto: string;
    public seguimentoAtivo: string;
    public qtdCotas: number;
    public flVendido: boolean;
    public dtCadastro: Date;
    public imagem: string;
    public tipoAtivoId: number;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.nomeAtivo = data.NomeAtivo;
    this.nomeAtivoCompleto = data.NomeAtivoCompleto;
    this.seguimentoAtivo = data.SeguimentoAtivo;
    this.qtdCotas = data.QtdCotas;
    this.flVendido = data.FlVendido;
    this.dtCadastro = data.DtCadastro;
    this.imagem = data.Imagem;
    this.tipoAtivoId = data.TipoAtivoId;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}