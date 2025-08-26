import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class historicoAtivoService{
    
    apiUrl = 'http://localhost:5107/api/HistoricoAtivo';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    

    public CadastrarHistoricoAtivo(nota: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, nota, this.httpOpitions);
    }
   
    public EditarHistoricoAtivo(nota: any): Observable<any> {
        return this.httpClient.put<any>(this.apiUrl, nota, this.httpOpitions);
    }

   

    public ListarHistoricoAtivoPorId(id: any): Observable<any> {
                 
            return this.httpClient.get(this.apiUrl + '/' + id)
            .pipe(
                map(response => {
                    return response;
                })
            );
        }

     
 }