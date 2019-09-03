import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Presence } from '../model/presence';
import { Pessoa } from '../model/pessoa';

const URL: string = "http://localhost:8080/api" + '/presence';


@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  constructor(private http: HttpClient) { }

  addPresence(presence: Presence): Observable<Presence> {
    return this.http.post<Presence>(URL, presence);
  }

  getAll(): Observable<Presence[]> {
    return this.http.get<Presence[]>(URL);
  }

  update(pessoa:Pessoa, id:number): Observable<Presence> {
    return this.http.put<Presence>(URL+'/'+id, pessoa);
  }



}
