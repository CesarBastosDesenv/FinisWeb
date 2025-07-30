import { ativo } from "../models/ativo";
import { queryId } from "../core/models/queryid"

export class PaginadorQueryId extends queryId{

    public pageNumber: number | undefined;
    public pageSize: number | undefined;
    public paramId: number | undefined;

}