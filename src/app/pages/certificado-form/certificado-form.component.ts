import { Component } from '@angular/core';
import { SecoundaryButtonComponent } from '../../_components/secoundary-button/secoundary-button.component';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { FormsModule, NgModel} from '@angular/forms';
import { NgStyle, CommonModule } from '@angular/common';
@Component({
  selector: 'app-certificado-form',
  imports: [SecoundaryButtonComponent, PrimaryButtonComponent, FormsModule, NgStyle, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  nome:string = "";
  atividade:string = "";
  atividades:string[] = [];

  campoInValido(control: NgModel)
  {
    return control.invalid && control.touched
  }

  formValido(): boolean{
    return this.atividades.length > 0 && this.nome.length> 0;
  }

  adicionarAtividade(){
    this.atividades.push(this.atividade);
  }

  excluirAtividade(index: number){
    this.atividades.splice(index);
  }
}
