import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

const URL: string = "http://localhost:8080/api" + '/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
  }

  getLogin(usuairo:Usuario): Observable<Usuario> {
    return this.http.get<Usuario>(URL+'/'+ usuairo.login);
  }

}
