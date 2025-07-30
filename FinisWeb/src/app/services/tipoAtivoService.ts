import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class tipoAtivoService{
    
    apiUrl = 'http://localhost:5107/api/TipoAtivo';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    

    public CadastrarTipoAtivo(nota: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, nota, this.httpOpitions);
    }
   
    public EditarTipoAtivo(nota: any): Observable<any> {
        return this.httpClient.put<any>(this.apiUrl, nota, this.httpOpitions);
    }

    public ListarTipoAtivo(params: any): Observable<any> {
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

    public ListarTipoAtivoPorId(id: any): Observable<any> {
                 
            return this.httpClient.get(this.apiUrl + '/' + id)
            .pipe(
                map(response => {
                    return response;
                })
            );
        }

    
 }