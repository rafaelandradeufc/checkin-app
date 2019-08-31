import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };

  activeMessageError: boolean = false;

  constructor(private router: Router) {

  }


  LogOn() {
    localStorage['token'] = 'xptoh26410x5=50';
    this.router.navigate(['home']);

  }

  ngOnInit() {

  }



}
