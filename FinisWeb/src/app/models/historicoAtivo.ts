export class historicoAtivo {
    public id : number;
    public dtHistorico : Date;
    public descricao: string;
    public ativoId: number;
    
    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.dtHistorico = data.dtHistorico;
    this.descricao = data.descricao;
    this.ativoId = data.ativoId;
   
    }
}