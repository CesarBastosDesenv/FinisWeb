import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class compraAtivoService{
    
    apiUrl = 'http://localhost:5107/api/CompraAtivo';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    public ListarCompraAtivoPorIdParams(params: any): Observable<any> {
        return new Observable<any>(observer => {            
            this.httpClient.get(this.apiUrl + '/' + params.ParamId + '/list', {params: params})
            .pipe(
                catchError((err) => {
                observer.error(err);
                throw err;
            }),
            map(response => {
                return response;
            })
            ).subscribe(response => {
                observer.next(response);
                observer.complete();
            });            
        });
    }

    public CadastrarCompraAtivo(nota: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, nota, this.httpOpitions);
    }

   

}