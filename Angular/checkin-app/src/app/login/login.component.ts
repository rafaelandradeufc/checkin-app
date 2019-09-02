import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  userlogged: Usuario = new Usuario();

  activeMessageError: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {

  }


  LogOn() {
    this.loginService.getLogin(this.usuario).subscribe(userlogged => {
      this.userlogged = userlogged;

      if (this.userlogged.login === this.usuario.login && this.userlogged.password === this.usuario.password) {
        localStorage['token'] = this.usuario.login;
        this.router.navigate(['home']);
      }else{
      this.activeMessageError = true;
      this.usuario.password = '';
      }

    }, error => {

      if (error.status != '0')
        this.activeMessageError = true;
      this.usuario.password = '';
    });

  }

  ngOnInit() {

  }



}
