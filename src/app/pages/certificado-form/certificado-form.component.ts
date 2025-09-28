import { Component, ViewChild } from '@angular/core';
import { SecoundaryButtonComponent } from '../../_components/secoundary-button/secoundary-button.component';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { FormsModule, NgModel} from '@angular/forms';
import { NgStyle, CommonModule } from '@angular/common';
import { Certificado } from '../../Interfaces/certficado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidv4 } from 'uuid';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-certificado-form',
  imports: [SecoundaryButtonComponent, PrimaryButtonComponent, FormsModule, NgStyle, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  constructor(private certificadoService: CertificadoService, private router: Router){}

  @ViewChild('form') form!: NgForm
  atividade: string = "";
  certificado : Certificado = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
  };

  campoInValido(control: NgModel)
  {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length> 0;
  }

  adicionarAtividade(){
    if(this.atividade.length === 0){
      return;
    }
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number){
    this.certificado.atividades.splice(index, 1);
  }

  submit(){
    if(!this.formValido()){
      return;
    }
    this.certificado.id = uuidv4();
    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificados(this.certificado)

    this.router.navigate(['certificados', this.certificado.id])
  }

  dataAtual(){
    const  dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() +1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const diatual:string = `${dia}/${mes}/${ano}`;

    return diatual;
  }

  estadoInicial(): Certificado{
    return{
      id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
    }
  }
}
