import { Component } from '@angular/core';
import { SecoundaryButtonComponent } from '../../_components/secoundary-button/secoundary-button.component';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { FormsModule, NgModel} from '@angular/forms';
import { NgStyle, CommonModule } from '@angular/common';
import { Certificado } from '../../Interfaces/certficado';
@Component({
  selector: 'app-certificado-form',
  imports: [SecoundaryButtonComponent, PrimaryButtonComponent, FormsModule, NgStyle, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  atividade: string = "";
  certificado : Certificado = {
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

    this.certificado.dataEmissao = this.dataAtual()
    console.log(this.certificado)
  }

  dataAtual(){
    const  dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() +1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const diatual:string = `${dia}/${mes}/${ano}`;

    return diatual;
  }
}
