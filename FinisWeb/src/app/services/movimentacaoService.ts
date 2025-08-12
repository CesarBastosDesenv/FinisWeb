import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class movimentacaoService{
    
    apiUrl = 'http://localhost:5107/api/Movimentacao';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    

    public CadastrarMovimentacao(nota: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, nota, this.httpOpitions);
    }
   
    public EditarMovimentacao(nota: any): Observable<any> {
        return this.httpClient.put<any>(this.apiUrl, nota, this.httpOpitions);
    }

    public ListarMovimentacao(params: any): Observable<any> {
        return new Observable<any>(observer => {            
            this.httpClient.get(this.apiUrl, {params: params})
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

    public ListarMovimentacaoPorId(id: any): Observable<any> {
                 
            return this.httpClient.get(this.apiUrl + '/' + id)
            .pipe(
                map(response => {
                    return response;
                })
            );
        }

     
 }