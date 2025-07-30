import { ativo } from "../models/ativo"
import { query } from "../core/models/query"

export class paginadorQuery extends query{

    public pageNumber: number | undefined;
    public pageSize: number | undefined;

}