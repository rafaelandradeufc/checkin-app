import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent implements OnInit {
  checked: boolean = false;
  pessoa = new Pessoa();
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  validarDATA(data: string): boolean {
    if (data == "" || data == null) { return false; }

    const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/gm;
    data = data.replace(regex, "true");

    if (data == "true") {
      return true;

    }

    return false;

  }

  validarTelefone(telefone: string): boolean {
    if (telefone == "" || telefone == null) { return false; }
    
    telefone = telefone.replace(/[^\d]+/g, '');
    if (telefone.length >= 11) {
      return true;
    }
    return false;

  }

  validarCPF(cpf: string): boolean {

    if (cpf == "" || cpf == null) return false;

    // Elimina CPFs invalidos conhecidos	
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
    // Valida primeiro digito	
    var add = 0;
    for (var i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    // Valida segundo digito	
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }

}
