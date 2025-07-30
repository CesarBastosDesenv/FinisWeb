export class tipoAtivo {
    public id : number;
    public tipoNome : string;
    public status: boolean;
    public pageNumber : number;
    public pageSize : number;

    constructor (data: any ={}) {
        if (data == null || data == undefined) { data = {}; }
        
    this.id = data.id;
    this.tipoNome = data.TipoNome;
    this.status = data.status;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
    }
}