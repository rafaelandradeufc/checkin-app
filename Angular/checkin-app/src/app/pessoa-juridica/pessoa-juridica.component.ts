import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { Location } from '@angular/common';
import { ClrLoadingState } from '@clr/angular';
import { Router } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent implements OnInit {
  checked: boolean = false;
  pessoa = new Pessoa();

  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private router: Router,
    private location: Location,
    private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  keyPressNotNumbers(event: any) {
    const pattern = /[a-zA-Záàâãéèêíïóôõöúçñ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  async addPessoaJuridica() {
    this.pessoaService.addPessoa(this.pessoa).subscribe(async pessoa => {
      this.validateBtnState = ClrLoadingState.LOADING;
      this.validateBtnState = ClrLoadingState.SUCCESS;
      await this.delay(1000);
      this.router.navigate(['home/menu-servico/presenca', this.pessoa.cpf]);
    });

  }


  keyPressNotLetters(event: any) {
    const pattern = /[0-9.-/]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
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


  validarCNPJ(str): boolean {

    if (str == "" || str == null) return false;

    let cnpj = str.replace(/[^\d]+/g, '')

    // Valida a quantidade de caracteres
    if (cnpj.length !== 14)
      return false

    // Elimina inválidos com todos os caracteres iguais
    if (/^(\d)\1+$/.test(cnpj))
      return false

    // Cáculo de validação
    let t = cnpj.length - 2,
      d = cnpj.substring(t),
      d1 = parseInt(d.charAt(0)),
      d2 = parseInt(d.charAt(1)),
      calc = x => {
        let n = cnpj.substring(0, x),
          y = x - 7,
          s = 0,
          r = 0

        for (let i = x; i >= 1; i--) {
          s += n.charAt(x - i) * y--;
          if (y < 2)
            y = 9
        }

        r = 11 - s % 11
        return r > 9 ? 0 : r
      }

    return calc(t) === d1 && calc(t + 1) === d2
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
