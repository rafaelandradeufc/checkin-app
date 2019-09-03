import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../model/pessoa';

const URL: string = "http://localhost:8080/api" + '/person';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(URL, pessoa);
  }

  getPessoaByCpf(cpf: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(URL + '/' + cpf);
  }
}
