import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';


@Injectable()
export class SessaoService {

  constructor(private router: Router) { }


  setUsuarioLogado(usuario: Usuario): void {
    localStorage.setItem(btoa('usuarioLogado'), btoa(JSON.stringify(usuario)));
  }

  deleteUsuarioLogado() {
    localStorage.removeItem(btoa('usuarioLogado'));
  }

}
