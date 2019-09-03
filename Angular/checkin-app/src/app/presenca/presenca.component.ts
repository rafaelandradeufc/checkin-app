import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { Pessoa } from '../model/pessoa';
import { ClrLoadingState } from '@clr/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';
import { PresencaService } from '../service/presenca.service';
import { Presence } from '../model/presence';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  listPresenca: Presence[] = [];

  cpf: string;
  id: number;

  cpfRouter: string = null;

  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService,
    private presencaService: PresencaService,
    public datepipe: DatePipe) { }

  ngOnInit() {

    this.presencaService.getAll().subscribe(presencas => {
      this.listPresenca = presencas;
    });


    this.cpfRouter = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.cpfRouter !== null) {

      this.pessoaService.getPessoaByCpf(this.cpfRouter).subscribe(pessoa => {
        this.pessoa = pessoa
      });
    }

  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  refreshPessoa() {

    if (this.cpf !== null && this.cpf !== '') {

      this.pessoaService.getPessoaByCpf(this.cpf).subscribe(pessoa => {
        this.pessoa = pessoa
      });
    }
  }


  async addPresenca() {

    this.presencaService.update(this.pessoa, this.id).subscribe(async presenca => {
      this.validateBtnState = ClrLoadingState.LOADING;
      this.validateBtnState = ClrLoadingState.SUCCESS;
      await this.delay(1000);
      this.goBack();

    });


  }

  goBack() {

    this.router.navigate(['home']);
  }

  keyPressNotLetters(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
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
